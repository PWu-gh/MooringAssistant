import React, { useState, useContext, useEffect }  from 'react';
import {View, Text, TouchableHighlight, Image, AppState  } from "react-native";
import AsyncStorage  from '@react-native-community/async-storage';

import styles from "../styles/styles"
import {DataContext} from "../components/DataContext"
import { ScrollView } from 'react-native-gesture-handler';

export default function historic({ navigation }) {
    const pressHandler = () => navigation.goBack();

    // context val
    const { stateProf, stateCali, stateRatio, stateDeploy } = useContext(DataContext);
    const [profondeur, setProfondeur] = stateProf;
    const [ratioChaine, setRatioChaine] = stateRatio;
    const [calibrage, setCalibrage] = stateCali;
    const [deploy, setDeploy] = stateDeploy;


    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2); //To get the Current Date
    let month = ('0' + (date.getMonth() + 1)).slice(-2); //To get the Current Month
    let year = date.getFullYear().toString().slice(-2); //To get the Current Year
    let hour = ("0" + date.getHours()).slice(-2); //To get the Current Hours
    let min = ("0" + date.getMinutes()).slice(-2); //To get the Current Minutes

    let curDate = day + "-"+ month+"-"+ year
    let curTime = hour+":"+min;

    const [getDate, setDate] = useState("[]");


    async function storeData(key, data){
        try {
            await AsyncStorage.setItem(key, data)
        } 
        catch (e) {
          console.log(e);
        }
    }


    async function insertData(maxsize = 10){
        let dataObj = {
            prof: profondeur,
            rati: ratioChaine,
            cali:calibrage,
            depl: deploy,
            ctime: curTime,
            cdate: curDate
        }
        try {
            const val = await AsyncStorage.getItem('@hist');
            let dataRec = JSON.parse(val)
            if(dataRec == null){
                dataRec = [];
                dataRec.push(dataObj);
            }
            else{
                dataRec.push(dataObj)
                if(dataRec.length > maxsize){ // on dépasse la taille max
                    dataRec.shift()
                }
            }
            // console.log(dataRec)*
            console.log("pamplemousse")
            storeData('@hist', JSON.stringify(dataRec));
            
        } 
        catch(e) {
            console.log(e);
        }
    }
    async function retrieveData(key){
        try {
            const val = await AsyncStorage.getItem(key);
            // let valRec = JSON.parse(val);
            setDate(val);
        } 
        catch (e) {
          console.log(e);
        }
    }

    async function resetData(key){
        try {
            AsyncStorage.removeItem(key)
            console.log('tadaaa')
        } 
        catch (e) {
          console.log(e);
        }
    }



    let histData;
    retrieveData('@hist').then(histData = JSON.parse(getDate));

    let HistView = [];
    for(let i = histData.length-1; i >= 0; i--){
		HistView.push(
            <View key={histData.length-i} style= {styles.histPart}>
                <View style={styles.sflex}>
                    <View style={styles.histDate}>
                        <Text style={styles.textHighlight}>{histData.length-i}    [{histData[i].ctime}]   {histData[i].cdate}</Text>
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

    return (
        <View style= {styles.useScreen}>

            <ScrollView style={styles.histScroll}>
                <View style={{height:60}}></View>
                { HistView}
                <View style={{height:60}}></View>
            </ScrollView>



            {/* <TouchableHighlight style= {styles.menuBtn} onPress= { ()=> insertData()}>
                <View>
                    <Text style={styles.textStyle}>hist</Text>
                </View>
            </TouchableHighlight> */}

        </View>

    );
}
