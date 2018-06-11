import React, { Component } from 'react';
import NavbarComponent from './components/NavbarComponent';
import KeyboardComponent from './components/KeyboardComponent';
import ButtonsComponent from './components/ButtonsComponent';
import ScoreBoardComponent from './components/ScoreBoardComponent';
import NamesModalComponent from './components/NamesModalComponent';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

const combinations = [
  ['0', '1', '2'],
  ['0', '4', '8'],
  ['0', '3', '6'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['2', '4', '6'],
  ['3', '4', '5'],
  ['6', '7', '8']
];

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      values:['','','','','','','','',''],
      user1Name: 'Qristik',
      user2Name: 'Norik',
      user1Action: 0,
      user2Action: 0,
      user1Value: 'X',
      user2Value: 'O',
      user1Score: 0,
      user2Score: 0,
      scoreVisible: false,
      visibleNameInputs: true,
      winCombination: []
    }
  }

  userPress(i){
    let val = this.state.values;
    if((this.state.user1Action == this.state.user2Action) && (val[i] == '')){
      val[i] = this.state.user1Value;
     this.setState({
        user1Action: this.state.user1Action + 1
      });
      for(let i=0; i<val.length; i++){
        for(let j=0; j<combinations.length; j++){
          let comb = combinations[j];
          if((val[comb[0]] != '') && (val[comb[1]] != '') && (val[comb[2]] != '')){
            if((val[comb[0]] == val[comb[1]]) && (val[comb[1]] == val[comb[2]])){
              let combinationArray = [comb[0], comb[1], comb[2]];
                this.setState({
                  winCombination: combinationArray
                });
                return Alert.alert(
                    'Game over',
                    this.state.user1Name + ' won!',
                    [
                      {text: 'OK', onPress: () => {
                        this.setState({
                          user1Score : this.state.user1Score + 1,
                          winCombination: [],
                          scoreVisible: true,
                          user1Action: 0,
                          user2Action: 0,
                          values:['','','','','','','','','']
                        });
                      }}
                    ]
                  );
          }
        }
      }
    }
  }
    if((this.state.user1Action > this.state.user2Action) && (val[i] == '')){
      val[i] = this.state.user2Value;
       this.setState({
        user2Action: this.state.user2Action + 1
      });
        for(let i=0; i<val.length; i++){
          for(let j=0; j<combinations.length; j++){
            let comb = combinations[j];
            if((val[comb[0]] != '') && (val[comb[1]] != '') && (val[comb[2]] != '')){
              if((val[comb[0]] == val[comb[1]]) && (val[comb[1]] == val[comb[2]])){
                let combinationArray = [comb[0], comb[1], comb[2]];

                  this.setState({
                    winCombination: combinationArray
                  });

                  return Alert.alert(
                      'Game over',
                      this.state.user2Name + ' won!',
                      [
                        {text: 'OK', onPress: () => {
                          this.setState({
                            user2Score : this.state.user2Score + 1,
                            winCombination: [],
                            scoreVisible: true,
                            user1Action: 0,
                            user2Action: 0,
                            values:['','','','','','','','','']
                          });
                        }}
                      ]
                    );
            }
          }
        }
      }
    }
    this.setState({values: val})
    let count=9;
    for(let a = 0; a < this.state.values.length; a++){
      if(this.state.values[a] != ''){
        count = count-1;
      }
    }
    if(count == 0){
      return Alert.alert(
          'Game over',
          'Game over draw',
          [
            {text: 'OK', onPress: () => {
              this.setState({
                scoreVisible: true,
                user1Action: 0,
                user2Action: 0,
                values:['','','','','','','','','']
              });
            }}
          ]
        );
    }
  }

  newGame(){
    this.setState({
      values:['','','','','','','','',''],
      user1Name: 'Qristik',
      user2Name: 'Norik',
      user1Action: 0,
      user2Action: 0,
      user1Score: 0,
      user2Score: 0,
      visibleNameInputs: true,
      winCombination: []
    });
  }

  showScore(){
    this.setState({
      scoreVisible: true
    });
  }

  changeUser1Name(name){
    this.setState({
      user1Name: name
    });
  }

  changeUser2Name(name){
    this.setState({
      user2Name: name
    });
  }

  namesConfirm(){
    this.setState({
      visibleNameInputs: false
    });
  }

  backGame(){
    if(this.state.winCombination.length > 0){
      this.setState({
        scoreVisible: false,
        winCombination: []
      });
    }
    else{
      this.setState({
        scoreVisible: false
      });
    }
  }

  playAgain(){
    this.setState({
      values:['','','','','','','','',''],
      user1Action: 0,
      user2Action: 0,
      scoreVisible: false,
      winCombination: []
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavbarComponent
          action1={this.state.user1Action}
          username1={this.state.user1Name}
          action2={this.state.user2Action}
          username2={this.state.user2Name}
        />
        <KeyboardComponent
          values={this.state.values}
          combinationWin={this.state.winCombination}
          itemPress={(i)=>this.userPress(i)}
        />
        <ButtonsComponent
          pressLeftButton = {()=> this.newGame()}
          pressRightButton={()=> this.showScore()}
          titleLeftButton='New game'
          titleRightButton='Score'
        />

        <ScoreBoardComponent
          scoreShow={this.state.scoreVisible}
          user1={this.state.user1Score}
          user2={this.state.user2Score}
          username1={this.state.user1Name}
          username2={this.state.user2Name}
          backGame={()=> this.backGame()}
          playAgain={()=>this.playAgain()}
        />

        <NamesModalComponent
          namesInputsVisible={this.state.visibleNameInputs}
          changeName1={(name)=>this.changeUser1Name(name)}
          changeName2={(name)=>this.changeUser2Name(name)}
          confirmNames={()=>this.namesConfirm()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
});
