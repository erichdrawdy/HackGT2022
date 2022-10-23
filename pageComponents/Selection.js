import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable} from 'react-native';
import { useState } from 'react';
import {withNavigation} from "react-navigation";
import DiversityBar from './DiversityBar';


const Selection = ({navigation}) => {
  

    const [data, setData] = useState(null);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const [select, setSelect] = useState(0);
    const [items, setItems] = useState(null);
    const [array, setArray] = useState([])

    console.log(navigation)
    

    function add(ticker) {
        if (!array.includes(ticker)) {
            setArray(prev => [...prev, ticker])
            setCount(count + 1)
            setProgress(count / 7.0)
        } else {
            setArray((current) =>
            current.filter((tick) => tick != ticker)
          );
          setCount(count - 1)
          setProgress(count / 7.0)

        }
        
        console.log(array) 
        
        
    }

    function toResult() {
        global.myVar = array
        navigation('ResultPage')
    }
    

  return (
    <>
    <DiversityBar progress={progress}></DiversityBar>
        
        <Text style={styles.text}>Stocks Selected: {array.join(', ')}</Text>
        {(select == 0) ? <><Pressable style={styles.button} onPress={() => setSelect(1)}><Text style={styles.buttonText}>Technology</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(2)}><Text style={styles.buttonText}>Energy</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(3)}><Text style={styles.buttonText}>Finance</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(4)}><Text style={styles.buttonText}>Consumer Staples</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(5)}><Text style={styles.buttonText}>Communication</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(6)}><Text style={styles.buttonText}>Discretionary</Text></Pressable>
        
        <Pressable style={styles.button2} onPress={() => toResult()}><Text style={styles.buttonText}>CONTINUE</Text></Pressable>
        
        </> : <></>}
        
        {(select == 1) ? <>
        
            <Pressable style={styles.button} onPress={() => add("MSFT")}><Text style={styles.buttonText}>Microsoft</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("APPL")}><Text style={styles.buttonText}>Apple</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("GOOG")}><Text style={styles.buttonText}>Alphabet</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("META")}><Text style={styles.buttonText}>Meta</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("SNAP")}><Text style={styles.buttonText}>Snapchat</Text></Pressable>
        
            <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText}>BACK</Text></Pressable>
        
        </> : <></>}

        {(select == 2) ? <>
        
        <Pressable style={styles.button}><Text style={styles.buttonText}>ExxonMobil</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Chevron</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Devon Energy</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Occidental Petroleum</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Kinder Morgan</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>NextEra Energy</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText}>BACK</Text></Pressable>
    
    </> : <></>}

    {(select == 3) ? <>
        
        <Pressable style={styles.button}><Text style={styles.buttonText}>Berkshire Hathaway</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>JPMorgan Chase</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Visa</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Mastercard</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>PayPal</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Bank of America</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Morgan Stanley</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Wells Fargo</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Goldman Sachs</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText}>BACK</Text></Pressable>
    
    </> : <></>}

    {(select == 4) ? <>
        
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText}>BACK</Text></Pressable>
    
    </> : <></>}

    {(select == 5) ? <>
        
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText}>BACK</Text></Pressable>
    
    </> : <></>}

    {(select == 6) ? <>
        
        <Pressable style={styles.button}><Text style={styles.buttonText}>McDonalds</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Amazon</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText}>XXX</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText}>BACK</Text></Pressable>
    
    </> : <></>}
        
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
        width: 300,
        justifyContent: 'center',
        paddingVertical: 12,
        marginTop: 15,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#d90f8e',
        
      },
      button2: {
        alignItems: 'center',
        width: 300,
        justifyContent: 'center',
        paddingVertical: 12,
        marginTop: 15,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#e16b64',
      },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    text1: {
      fontSize: 15,
    },
    text: {
        fontSize: 15,
        color: 'white'
      },
  });

export default Selection;