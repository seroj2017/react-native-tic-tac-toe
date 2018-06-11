import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import ItemComponent from './ItemComponent';

export default class KeyboardComponent extends React.Component{
  constructor(props){
    super(props);
  }

  item(i, itemValue, _backgroundColor){
    let bgColor;

    itemValue == 'X' ? bgColor = 'blue' : bgColor = 'red';

    return (
      <ItemComponent
        ref={i}
        key={i}
        style={{color: bgColor}}
        value={itemValue}
        backgroundColor={_backgroundColor}
        pressItem={()=>this.props.itemPress(i)}/>
    )
  }

  generateItems(values){
    let items = [];
    let backgroundColor = '#ECECEC';
    let winIndexes = this.props.combinationWin;
    for(let i=0; i < values.length; i++){
      if(winIndexes.length > 0 && winIndexes.includes(String(i))){
        backgroundColor = '#6CDF4C';
      } else {
        backgroundColor = '#ECECEC';
      }
      items.push(this.item(i, values[i], backgroundColor));
    }

    return items;
  }

  render(){
    return(
      <View style={styles.container}>
        {this.generateItems(this.props.values)}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 3/5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
