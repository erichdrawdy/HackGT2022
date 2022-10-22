//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text} from 'react-native';
//import all the components we are going to use.
 
export default class ThirdPage extends Component {


  static navigationOptions = {
    title: 'Third Page',
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;



    return (
      <View style={styles.container}>
        <Text>You are on ThrdPage</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
