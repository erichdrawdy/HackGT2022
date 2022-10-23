import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable} from 'react-native';
import { useState } from 'react';
import {withNavigation} from "react-navigation";

const Home = () => {
  

    const [data, setData] = useState(null);

    function stockAPI() {

      fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2022-07-22?adjusted=true&sort=asc&limit=120&apiKey=HSMNRUITPGqoXqgpUlgWjaTNpP28ItWQ')
        .then((response) => response.json())
        .then((data) => setData(data));      
  
    }

  return (
    <>
    <Text>hello</Text>
    <Button onPress={stockAPI} title="Hello"></Button>
    </>
  );

  
  
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
      fontWeight: 800,
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
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    text1: {
      fontSize: 15,
    },
  });

export default Home;