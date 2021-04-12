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


    // store data in cache
    async function storeData(key, data){
        try {
            await AsyncStorage.setItem(key, data)
        } 
        catch (e) {
          console.log(e);
        }
    }

    // take from cache and set states
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
    const updateData = () => {
        let dataObj = {
            prof: profondeur,
            rati: ratioChaine,
            cali:calibrage,
            depl: deploy
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

    // store historic

    const appStateChange = () => {
        AppState.addEventListener('change', handleAppStateChange);

        return () => {
        AppState.removeEventListener('change', handleAppStateChange);
        };
    }

    const handleAppStateChange = (nextAppState) => {
        if (nextAppState!= 'active') { // quand on sort de l'application, on sauvegarde
            console.log('test '+ nextAppState)
        }    
        else{
            console.log('test '+ nextAppState)
        }
    }

    return (
        <DataContext.Provider value={{
            stateProf: [profondeur, setProfondeur], 
            stateRatio: [ratioChaine, setRatioChaine], 
            stateCali: [calibrage, setCalibrage], 
            stateDeploy: [deploy, setDeploy]}}
        >

            {children}

        </DataContext.Provider>
    )
}

