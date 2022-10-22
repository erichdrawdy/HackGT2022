import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable} from 'react-native';

const Home = () => {
  const name = "Maru";

  return (
    <View style={styles.container}>
    <Text>Hello, I am {name}!</Text>

    <Text style={styles.header}>Test</Text>

      

    <Button title='Go to second page'
      onPress={() =>navigate('SecondPage')}
          
      > </Button>




        <Button style={styles.button} title='Go to thirds page'
      onPress={() =>navigate('ThirdPage')}
          
      > Third Page</Button>

</View>
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
    text1: {
      fontSize: 15,
    },
  });
export default Home;