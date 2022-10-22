import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable} from 'react-native';
import { useState } from 'react';
import {withNavigation} from "react-navigation";

import LoadingBar from 'react-top-loading-bar';

const DiversityBar = () => {
  

  const [progress, setProgress] = useState(0)


  return (
    <>
    
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
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

export default DiversityBar;