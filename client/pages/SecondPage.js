//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, TextInput, Button, Pressable, Image} from 'react-native';
//import all the components we are going to use.
import { withNavigation } from "react-navigation";
import { useEffect} from 'react';
import Amount from '../Amount';
import retro from '../images/retro4.png';
 
export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Second Page',
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
        <Image style={styles.image} source={require('../images/retro4.png')}></Image>
        <Amount navigate={navigate}></Amount>
        {/* <Text>You are on SecondPage</Text>
        <Pressable style={styles.button}
      onPress={() => navigate('FourthPage')}><Text style={styles.buttonText}>Next</Text></Pressable> */}
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

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontStyle: 'italic',
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
  image: {
    width: 600,
    height: 600,
    position: 'absolute',
    top: 400,
  },
});
