import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import {withNavigation} from "react-navigation";
import * as Progress from 'react-native-progress';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';


const Result = () => {
  
  const [color, setColor] = useState("rgba(212, 2, 119, 1)")
  //rgb(212,2,119)


  useEffect(() => {
    process();
  }, []);
  
  function process() {
    const array = global.myVar
    array.map(element => stockAPI(element))

    // here baby 
    

  }

  const [data, setData] = useState(null);

  const [close, setClose] = useState("")

  const arr = []

  function addToArray(array) {
    arr.push(array)


  }

  const [save, setSave] = useState()

  // function adjust(data) {

  //   const temp = JSON.stringify(data);
    
  //   console.log(temp)


  // }

  function display() {
    console.log(arr)
    console.log(JSON.stringify(arr))
    //setSave(JSON.stringify(arr))
    fetch('http://127.0.0.1:5000/compute', {
      method: 'Post',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(arr)
    })
    .then((response) => response.json())
    .then((data) => console.log(data)); 
    

  }
    function stockAPI(element) {

        

        
      fetch('https://api.polygon.io/v2/aggs/ticker/' + element + '/range/1/day/2021-07-22/2022-07-22?adjusted=true&sort=asc&limit=366&apiKey=HSMNRUITPGqoXqgpUlgWjaTNpP28ItWQ')
        .then((response) => response.json())
        .then((data) => {
          var arr = []
          arr.push(element)
          var i = 0;
          while (i < data.results.length) {
            arr.push(data.results[i].c)
            i++;
          }
          addToArray(arr)
        });      
  
        
        
    }
  
  return (
    <>
    <Text style={styles.header}>results from the array</Text>
    <Button onPress={display}>Display shit</Button>
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