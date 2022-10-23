//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, Pressable, Image} from 'react-native';
//import all the components we are going to use.
 import LoadingBar from 'react-top-loading-bar';
 
 import { useState } from 'react';
 import Selection from '../pageComponents/Selection';
import DiversityBar from '../pageComponents/DiversityBar';
export default class FourthPage extends Component {


  static navigationOptions = {
    title: 'Company Selection',
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
    

    //const [progress, setProgress] = useState(0)
    
    



    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/retro3.png')}></Image>
        <Selection navigation={navigate}></Selection>
        
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
    margin: 0,
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
  image: {
    width: 300,
    height: 400,
    position: 'absolute',
    top: 300,
    left: 200,
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
});
