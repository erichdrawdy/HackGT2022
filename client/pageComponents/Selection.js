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
        
        <Text style={styles.text3}>Stocks Selected: {array.join(', ')}</Text>
        {(select == 0) ? <><Pressable style={styles.button} onPress={() => setSelect(1)}><Text style={styles.buttonText}>Technology</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(2)}><Text style={styles.buttonText}>Energy</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(3)}><Text style={styles.buttonText}>Finance</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(4)}><Text style={styles.buttonText}>Consumer Staples</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(5)}><Text style={styles.buttonText}>Communication</Text></Pressable>
        <Pressable style={styles.button} onPress={() => setSelect(6)}><Text style={styles.buttonText}>Discretionary</Text></Pressable>
        
        <Pressable style={styles.button2} onPress={() => toResult()}><Text style={styles.buttonText2}>CONTINUE</Text></Pressable>
        
        </> : <></>}
        
        {(select == 1) ? <>
        
            <Pressable style={styles.button} onPress={() => add("MSFT")}><Text style={styles.buttonText}>Microsoft</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("AAPL")}><Text style={styles.buttonText}>Apple</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("GOOG")}><Text style={styles.buttonText}>Alphabet</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("META")}><Text style={styles.buttonText}>Meta</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("SNAP")}><Text style={styles.buttonText}>Snapchat</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("NVDA")}><Text style={styles.buttonText}>Nvidia</Text></Pressable>
            <Pressable style={styles.button} onPress={() => add("AMZN")}><Text style={styles.buttonText}>Amazon</Text></Pressable>
        
            <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText2}>BACK</Text></Pressable>
        
        </> : <></>}

        {(select == 2) ? <>
        
        <Pressable style={styles.button} onPress={() => add("XOM")}><Text style={styles.buttonText}>ExxonMobil</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("CVX")}><Text style={styles.buttonText}>Chevron</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("DVN")}><Text style={styles.buttonText}>Devon Energy</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("OXY")}><Text style={styles.buttonText}>Occidental Petroleum</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("KMI")}><Text style={styles.buttonText}>Kinder Morgan</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("NEE")}><Text style={styles.buttonText}>NextEra Energy</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText2}>BACK</Text></Pressable>
    
    </> : <></>}

    {(select == 3) ? <>
        
        <Pressable style={styles.button} onPress={() => add("BRK-B")}><Text style={styles.buttonText}>Berkshire Hathaway</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("JPM")}><Text style={styles.buttonText}>JPMorgan Chase</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("V")}><Text style={styles.buttonText}>Visa</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("MA")}><Text style={styles.buttonText}>Mastercard</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("PYPL")}><Text style={styles.buttonText}>PayPal</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("BA")}><Text style={styles.buttonText}>Bank of America</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("MS")}><Text style={styles.buttonText}>Morgan Stanley</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("BLK")}><Text style={styles.buttonText}>BlackRock</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("GS")}><Text style={styles.buttonText}>Goldman Sachs</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText2}>BACK</Text></Pressable>
    
    </> : <></>}

    {(select == 4) ? <>
        
        <Pressable style={styles.button} onPress={() => add("WMT")}><Text style={styles.buttonText}>Walmart</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("KO")}><Text style={styles.buttonText}>Coca-Cola Co</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("LRLCY")}><Text style={styles.buttonText}>L'Oreal</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("TGT")}><Text style={styles.buttonText}>Target Corp</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("SYY")}><Text style={styles.buttonText}>Sysco Corp</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("DLTR")}><Text style={styles.buttonText}>Dollar Tree</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("TSN")}><Text style={styles.buttonText}>Tyson Foods Inc</Text></Pressable>
        <Pressable style={styles.button} onPress={() => add("PG")}><Text style={styles.buttonText}>Proctor & Gamble</Text></Pressable>
        
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText2}>BACK</Text></Pressable>
    
    </> : <></>}

    {(select == 6) ? <>
        
      <Pressable style={styles.button} onPress={() => add("HLT")}><Text style={styles.buttonText}>Hilton</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("MAR")}><Text style={styles.buttonText}>Marriott</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("HRB")}><Text style={styles.buttonText}>H&R Block</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("HD")}><Text style={styles.buttonText}>The Home Depot</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("TJX")}><Text style={styles.buttonText}>TJX Companies</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("NKE")}><Text style={styles.buttonText}>Nike</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("RCL")}><Text style={styles.buttonText}>Royal Carribean</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("RBLX")}><Text style={styles.buttonText}>Roblox</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText2}>BACK</Text></Pressable>
    
    </> : <></>}

    {(select == 5) ? <>
        
      <Pressable style={styles.button} onPress={() => add("DIS")}><Text style={styles.buttonText}>Walt Disney Co</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("TMUS")}><Text style={styles.buttonText}>T-Mobile</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("CMCSA")}><Text style={styles.buttonText}>Comcast</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("T")}><Text style={styles.buttonText}>AT&T</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("LUMN")}><Text style={styles.buttonText}>Lumen</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("WWE")}><Text style={styles.buttonText}>WWE</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("FOX")}><Text style={styles.buttonText}>Fox Corp</Text></Pressable>
      <Pressable style={styles.button} onPress={() => add("NOK")}><Text style={styles.buttonText}>Nokia Corp</Text></Pressable>
    
        <Pressable style={styles.button2} onPress={() => setSelect(0)}><Text style={styles.buttonText2}>BACK</Text></Pressable>
    
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
    buttonText2: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
      fontWeight: '800'
  },
    text1: {
      fontSize: 15,
    },
    text: {
        fontSize: 15,
        color: 'white'
      },
      text3: {
        fontSize: 15,
        color: 'white',
        fontWeight: '600',
        fontStyle: 'italic'
      },
  });

export default Selection;