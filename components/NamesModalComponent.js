import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, TextInput, Button, Dimensions, KeyboardAvoidingView } from 'react-native';

export default class NamesModalComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.namesInputsVisible}>
          <View style={styles.container}>
            <KeyboardAvoidingView style={styles.keyboard} behavior="position">
                <View style={styles.content}>
                  <Text style={{fontSize: 15, color: '#3478F6'}}>Please enter your names</Text>

                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.props.changeName1(text)}
                    maxLength = {8}
                    placeholder='Type user1 name'
                  />
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.props.changeName2(text)}
                    maxLength = {8}
                    placeholder='Type user2 name'
                  />

                  <Button title ='Next' onPress={()=>this.props.confirmNames()}/>
                </View>
              </KeyboardAvoidingView>
            </View>
        </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(236, 236, 236, 0.3)',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#C3E1FB',
    borderRadius: 10,
    alignItems: 'center',
    width: Dimensions.get('window').width/1.5,
    height: Dimensions.get('window').height/2.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboard: {
    alignItems:'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    width: Dimensions.get('window').width/2,
    padding: 5,
    alignSelf:'center',
    margin: 10,
    borderColor: '#77B0DE',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white'
  }
})
