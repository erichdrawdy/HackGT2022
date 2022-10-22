//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, Text, Pressable} from 'react-native';
//import all the components we are going to use.
import { TouchableHighlight } from 'react-native-web'; 

import Home from '../pageComponents/home';

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
        
    
      <Home></Home>
      
    
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
  text1: {
    fontSize: 15,
  },
});
