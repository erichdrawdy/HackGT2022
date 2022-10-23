import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import {withNavigation} from "react-navigation";
import * as Progress from 'react-native-progress';


const Result = () => {
  
  const [color, setColor] = useState("rgba(212, 2, 119, 1)")
  //rgb(212,2,119)


  useEffect(() => {
    process();
  }, []);
  
  function process() {
    const array = global.myVar
    array.map(element => stockAPI(element))

    
  }

  const [data, setData] = useState(null);

  const [close, setClose] = useState(null)

  function adjust(data) {
    if (close == null) {
        setClose(data)
    } else {
        const obj1 = close.concat(data)
        setClose(obj1)
    }
    

  }

    function stockAPI(element) {

        

        
      fetch('https://api.polygon.io/v2/aggs/ticker/' + element + '/range/1/day/2021-07-22/2022-07-22?adjusted=true&sort=asc&limit=366&apiKey=HSMNRUITPGqoXqgpUlgWjaTNpP28ItWQ')
        .then((response) => response.json())
        .then((data) => console.log(data.results));      
  
        
    }
  
  return (
    <>
    <Text style={styles.header}>results from the array</Text>
    </>
  );

  
  
}

const styles = StyleSheet.create({
  
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 20,
    },
    header: {
      fontSize: 13,
      color: 'white',
      marginBottom: 20,
      // fontWeight: 800,
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

export default Result;