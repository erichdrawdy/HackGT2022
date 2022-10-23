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
        
    <>
      <View style={styles.container}>
      <Image style={styles.image} source={require('../images/retro4.png')}></Image>
    

    <Text style={styles.header}>This Portfolio</Text>
    <Text style={styles.mini}>Based on the last year of stock performance, these may return the most annually while minimizing risk from market volatility.</Text>
<Text style={styles.text}>Stocks Selected: {array.join(', ')}</Text>

        {/* <Result array={array}></Result> */}

        
        <Text style={styles.info}>Expected Annual Return: 24.3%</Text>
        <Text style={styles.info}>Total investment of $15000:</Text>
        <Text style={styles.return}>Apple: $2730</Text>
        <Text style={styles.return}>Amazon: $4070</Text>
        <Text style={styles.return}>Mastercard: $425</Text>
        <Text style={styles.return}>Nike: $1150</Text>
        <Text style={styles.return}>Roblox: $3900</Text>
        <Text style={styles.return}>Target: $2100</Text>
        <Text style={styles.return}>Hilton: $725</Text>
        


        <Pressable style={styles.button}
      onPress={() => navigate('FirstPage')}
          
      ><Text style={styles.buttonText}>Save</Text></Pressable>
      {/* <Image source={retro}></Image> */}

        <Pressable style={styles.button}
      onPress={() => navigate('FirstPage')}
          
      ><Text style={styles.buttonText}>Back to Home</Text></Pressable>
      {/* <Image source={retro}></Image> */}
      <Text style={styles.bottomText}> </Text>
    </View>
    </>
      
    
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
  mini: {
    fontSize: 12,
    width: 300,
    textAlign: 'center',
    color: 'white',
    marginBottom: 55,

  },
  return: {
    fontSize: 15,
    color: 'white',
  },
  header: {
    fontSize: 50,
    color: 'white',
    marginBottom: 20,
    fontWeight: '700',
    paddingTop: 100,
  },
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 370,
    left: 10,
  },
  info: {
    fontSize: 19,
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontWeight: 700,

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
