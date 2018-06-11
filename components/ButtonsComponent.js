import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export default class ButtonsComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>

        <TouchableOpacity onPress = {()=>this.props.pressLeftButton()}>
          <View style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{this.props.titleLeftButton}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {()=>this.props.pressRightButton()}>
          <View style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{this.props.titleRightButton}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2E48DB'
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: '#848788',
    height: Dimensions.get('window').height/5,
    width: Dimensions.get('window').width/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 30
  }
});
