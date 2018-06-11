import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

export default class NavbarComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {this.props.username1=='' ? 'Qristik' : this.props.username1}: {this.props.action1}   {this.props.username2=='' ? 'Norik' : this.props.username2}: {this.props.action2}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2548E4',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/5
  },
  textStyle: {
    fontSize: 30,
    color: 'white'
  }
});
