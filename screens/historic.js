import React, { useState, useContext, useEffect }  from 'react';
import {View, Text, TouchableHighlight, Image, AppState, ImageBackground  } from "react-native";
import AsyncStorage  from '@react-native-community/async-storage';

import styles from "../styles/styles"
import {DataContext} from "../components/DataContext"
import { ScrollView } from 'react-native-gesture-handler';

export default function historic({ navigation }) {
    const pressHandler = () => navigation.goBack();


    // usestate to store data
    const [getData, setData] = useState("[]");
    
    //
    async function retrieveData(key){
        try {
            const val = await AsyncStorage.getItem(key);
            // let valRec = JSON.parse(val);
            setData(val);
        } 
        catch (e) {
          console.log(e);
        }
    }

    // fonction to reset the dataset
    /*
    async function resetData(key){
        try {
            AsyncStorage.removeItem(key)
            console.log('tadaaa')
        } 
        catch (e) {
          console.log(e);
        }
    }
    */

    // store all data in histData
    let histData;
    retrieveData('@hist').then(histData = JSON.parse(getData));

    // create a var to store all Views Fragments
    let HistView = [];

    if (histData != null){
        // pushing all Display fragment inside  HistView, to print after
        for(let i = histData.length-1; i >= 0; i--){
            HistView.push(
                <View key={histData.length-i} style= {styles.histPart}>
                    <View style={styles.sflex}>
                        <View style={styles.histDate}>
                            <Text style={styles.textHighlight}>[{histData[i].ctime}]   {histData[i].cdate}</Text>
                            <Text style={styles.numTopLeft}>{histData.length-i}</Text>
                        </View>
                        <View style={styles.textBoxL2}>
                            <View style={styles.textBoxL1}>
                                <Text style={styles.textStyle}>Profondeur : {histData[i].prof}</Text>
                            </View>
                            <View style={styles.textBoxL1}>
                                <Text style={styles.textStyle}>Calibrage : {histData[i].cali}</Text>
                            </View>
                        </View>
                        <View style={styles.textBoxL2}>
                            <View style={styles.textBoxL1}>
                                <Text style={styles.textStyle}>Ratio : {histData[i].rati}</Text>
                            </View>
                            <View style={styles.textBoxL1}>
                                <Text style={styles.textStyle}>L. déployé : {histData[i].depl}</Text>
                            </View>
                        </View>
                    </View>
                </View>

            )
        }
    }else{
        // if there is no History data
        HistView.push(
            <View key={0} style={{  
                                    flex:1,
                                    alignContent:'center', 
                                    justifyContent:'center',
                                }}>
                <Text style={styles.textHighlight}>Vide</Text>
            </View>


        )
    }


    return (
        <ImageBackground source={require('../assets/img/backwater.png')} style= {styles.useScreen}>

            <ScrollView style={styles.histScroll}>
                {/* margin top */}
                <View style={{height:30}}></View> 
                { HistView}
                <View style={{height:60}}></View>
                {/*  margin bot */}
            </ScrollView>

        </ImageBackground>

    );
}
