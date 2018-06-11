import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

export default class ItemComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <TouchableOpacity onPress={()=>this.props.pressItem()}>
        <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
          <Text style={[styles.textStyle, this.props.style]}>{this.props.value}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#848788',
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').height/5
  },
  textStyle: {
    fontSize: 60
  }
});
