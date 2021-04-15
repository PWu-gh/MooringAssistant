import React, { useState, useEffect } from 'react'
import { AppState  } from "react-native";
import AsyncStorage  from '@react-native-community/async-storage';

export const DataContext = React.createContext();

let firstStart = true;

export function DataProvider({ children }) {
    const [profondeur, setProfondeur] = useState(0);
    const [ratioChaine, setRatioChaine] = useState(0);
    const [calibrage, setCalibrage] = useState(0);
    const [deploy, setDeploy] = useState(0);

    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2); //To get the Current Date
    let month = ('0' + (date.getMonth() + 1)).slice(-2); //To get the Current Month
    let year = date.getFullYear().toString().slice(-2); //To get the Current Year
    let hour = ("0" + date.getHours()).slice(-2); //To get the Current Hours
    let min = ("0" + date.getMinutes()).slice(-2); //To get the Current Minutes

    let curDate = day + "-"+ month+"-"+ year
    let curTime = hour+":"+min;

    // store data in cache
    async function storeData(key, data){
        try { await AsyncStorage.setItem(key, data) } 
        catch (e) {
          console.log(e);
        }
    }

    // take data from @data and set states
    async function recoverData() {
        try {
            const val = await AsyncStorage.getItem('@data');

            dataObj = JSON.parse(val)
            setProfondeur(dataObj.prof);
            setRatioChaine(dataObj.rati);
            setCalibrage(dataObj.cali);
            setDeploy(dataObj.depl);
        } 
        catch(e) {
            console.log(e);
        }
    }

    // Store data as object
    const updateData = () => {
        let dataObj = {
            prof: profondeur,
            rati: ratioChaine,
            cali:calibrage,
            depl: deploy,
            ctime: curTime,
            cdate: curDate,
        }
        storeData('@data', JSON.stringify(dataObj));
    }
    
    // update cache on each update on (profondeur, ratio, calbirage or deploy)
    useEffect(() => {
        if(firstStart){
            recoverData();
            firstStart = false;
        }
        else{
            updateData();
        }
    });


    return (
        <DataContext.Provider value={{
            stateProf: [profondeur, setProfondeur], 
            stateRatio: [ratioChaine, setRatioChaine], 
            stateCali: [calibrage, setCalibrage], 
            stateDeploy: [deploy, setDeploy],
            time: curTime,
            date: curDate,
        }}
        >

            {children}

        </DataContext.Provider>
    )
}

