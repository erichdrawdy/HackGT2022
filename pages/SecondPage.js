//This is an example code for Navigator// 
import React, { Component, useState } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, Button, TextInput}  from 'react-native';
//import all the components we are going to use.
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };

  render() {
    const { navigate } = this.props.navigation;
    //const [message, setMessage] = useState("");

    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>How much do you want to invest?
        </Text>
        <TextInput
          style={tbstyles.input}
          placeholder = 'e.g. $2250'
        />
        <Button
        color = "purple"
        title = "Next"
        onPress={() => navigate('ThirdPage')}/>
      </View>
    );
  }
}

const containerStyle = { backgroundColor: "blue"}

const tbstyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: 'purple',
    placeholderTextColor:"#777",
    //paddingTop: 25,
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7486',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Phosphate",
    color: '#FF2079',
    fontSize: 30,
    //paddingBottom: 15,
  },

});


