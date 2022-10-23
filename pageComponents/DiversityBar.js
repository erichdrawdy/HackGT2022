import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import {withNavigation} from "react-navigation";
import * as Progress from 'react-native-progress';


const DiversityBar = (progress) => {
  
  const [color, setColor] = useState("rgba(212, 2, 119, 1)")
  //rgb(212,2,119)


  useEffect(() => {
    changeColor();
  }, [progress]);
  
  function changeColor() {
    const prog = progress.progress
//rgb(234,166,33)s

    if (prog > 0.5) {
      setColor("rgba(234, 166, 33, 1)") 
    }
    //rgb(140,232,83)

    if (prog > 0.75) {
      setColor("rgba(140, 232, 83, 1)")
    }
  }
  
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Diversity Bar</Text>
    <Progress.Bar progress={progress.progress} color={color} width={300} />
    </View>
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
      fontSize: 20,
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

export default DiversityBar;