import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ButtonsComponent from './ButtonsComponent';

export default class ScoreBoardComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const tableHead = [this.props.username1, this.props.username2];
    const tableData = [[this.props.user1, this.props.user2]];

    return(
      <View>
        <Modal
           animationType="slide"
           transparent={false}
           visible={this.props.scoreShow}
           >

              <View style={styles.container}>
                <Text style={styles.textHeader}>Score</Text>
                <Table style={styles.tableStyle} borderStyle={{borderWidth: 1, borderColor: '#3478F6'}}>
                  <Row data={tableHead} style={styles.head} textStyle={[styles.text, {color: 'red'}]}/>
                  <Rows data={tableData} style={styles.row} textStyle={[styles.text, {color: 'blue', fontSize: 50}]}/>
                </Table>
              </View>

              <ButtonsComponent
                pressLeftButton = {()=> this.props.backGame()}
                pressRightButton={()=> this.props.playAgain()}
                titleLeftButton='Back'
                titleRightButton='Play again'
              />
         </Modal>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C3E1FB'
  },
  textHeader: {
    color: 'red',
    fontSize: 50,
    marginBottom: 20
  },
  head: {
    backgroundColor: '#65B2E2',
    height: 50
  },
  text: {
    marginLeft: 5,
    fontSize: 20,
    textAlign: 'center'
  },
  row: {
    height: Dimensions.get('window').height/2-50
  },
  tableStyle: {
    height: Dimensions.get('window').height/2,
    width: Dimensions.get('window').width/1.5
  }
})
