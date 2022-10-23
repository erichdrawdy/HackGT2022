//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, Text, Pressable, Image} from 'react-native';
//import all the components we are going to use.
import { TouchableHighlight } from 'react-native-web'; 
import { useState } from 'react';
import retro from '../images/retro2.png';
import Home from '../pageComponents/Home.js';

export default class FirstPage extends Component {
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

    

    return (
        
    
      <View style={styles.container}>
    
    <Image style={styles.image} source={require('../images/retro2.png')}></Image>

    <Text style={styles.header}>Stockify</Text>

      
      {/* <Home></Home> */}
    <Pressable style={styles.button}
      onPress={() => navigate('SecondPage')}
          
      ><Text style={styles.buttonText}>Create New Portfolio</Text></Pressable>




        <Pressable style={styles.button}
      onPress={() => navigate('ThirdPage')}
          
      ><Text style={styles.buttonText}>My Portfolios</Text></Pressable>
      {/* <Image source={retro}></Image> */}
      <Text style={styles.bottomText}> </Text>
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
    fontSize: 50,
    color: 'white',
    marginBottom: 20,
    fontWeight: '700',
    paddingTop: 100,
  },
  image: {
    width: 600,
    height: 600,
    position: 'absolute',
    top: 400,
  },
  button: {
    alignItems: 'center',
    width: 300,
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
      fontWeight: '500',
      fontStyle: 'italic',
  },
  text1: {
    fontSize: 15,
  },
});
