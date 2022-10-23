import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable, TextInput} from 'react-native';
import { useState } from 'react';
import {withNavigation} from "react-navigation";
import * as Progress from 'react-native-progress';
import { useEffect } from 'react';


const Amount = ({navigate}) => {
  useEffect(() => {
    monInput()
}, [money])

  const [money, setMoney] = useState('')

  function monInput() {
    global.mon = money;
  }

  function toResult() {
    global.mon = money;
    navigate('FourthPage')
  }

  const onChanged = (money) => {
    let newText = '';
    let numbers = '$0123456789';

    for (var i=0; i < money.length; i++) {
        if(numbers.indexOf(money[i]) > -1 ) {
            newText = newText + money[i];
        }
        else {
            alert("please enter numbers only");
        }
    }
    setMoney(newText);
}

  return (
    <>
        <Text style={styles.header}>How much do you want to invest?
        </Text>
        <TextInput
         keyboardType='numeric'
         onChangeText={money => onChanged(money)}
          style={styles.text1}
          placeholder = 'e.g. $2250'
          value = {money}
          //onChangeText = {(money) => setMoney(money)}
        />
        

        <Pressable style={styles.button}
      onPress={() => toResult()}
          
      ><Text style={styles.buttonText}>NEXT</Text></Pressable>
        
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
      width: 350,
      textAlign: 'center',

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
      color: 'white',
      fontWeight: '500',
  },
    text1: {
      width: 250,
      fontSize: 20,
      color: 'white',
      placeholderTextColor: 'gray',
      paddingBottom: 0,
      marginBottom: 30,
      height: 40,
      textAlign: 'center',
    },
  });

export default Amount;