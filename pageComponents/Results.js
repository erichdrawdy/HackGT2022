import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Button, Pressable} from 'react-native';
import view from "react-native-web/dist/exports/View";

const Results = () => {

    const [data, setData] = useState([]);
    const apiHandler = () => {
        fetch("https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=HSMNRUITPGqoXqgpUlgWjaTNpP28ItWQ")
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    return (
        <View style = {styles.container}>

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
    text1: {
        fontSize: 15,
    },
});

export default Results;
