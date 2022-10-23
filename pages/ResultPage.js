//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, Text, Pressable, Image} from 'react-native';
//import all the components we are going to use.
import { TouchableHighlight } from 'react-native-web'; 
import { useState } from 'react';
import retro from '../images/retro2.png';
import Home from '../pageComponents/Home.js';
import Result from '../pageComponents/Result';

export default class ResultPage extends Component {
  static navigationOptions = {
    title: 'Stockify',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#1c0b24',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white'
      //align: 'center',
      //Sets Header text style
    },
  };
 
  render() {
    const { navigate } = this.props.navigation;

    const array = global.myVar


    return (
        
    
      <View style={styles.container}>
    

    <Text style={styles.header}>Result</Text>
<Text style={styles.text}>Stocks Selected: {array.join(', ')}</Text>

        <Result array={array}></Result>


        <Pressable style={styles.button}
      onPress={() => navigate('FirstPage')}
          
      ><Text style={styles.buttonText}>Back to Home</Text></Pressable>
      {/* <Image source={retro}></Image> */}
      <Text style={styles.bottomText}>Created by Logan, Tomer, Rithvik, Mateo</Text>
    </View>
      
    
    );
  }
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#1c0b24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
    fontWeight: '700',
    paddingTop: 100,
  },
  button: {
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 15,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#d90f8e',
  },
  bottomText: {
    color: 'white',
    paddingTop: 200,
  },
  buttonText: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
  },
  text1: {
    fontSize: 15,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});
