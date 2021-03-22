import React, { useState, useEffect } from 'react'

export const DataContext = React.createContext();
const dataUpdateContext = React.createContext();

export function DataProvider({ children }) {
    const [profondeur, setProfondeur] = useState(0);
    const [ratioChaine, setRatioChaine] = useState(0);
    const [calibrage, setCalibrage] = useState(0);
    const [deploy, setDeploy] = useState(0);

    // async function storeData(key, value){
    //     try {
    //         await AsyncStorage.setItem(key, value)
    //     } 
    //     catch (e) {
    //       console.log(e);
    //     }
    // }

    // async function getData(key) {
    //     try {
    //         const value = await AsyncStorage.getItem(key)
    //         if(value !== null) {
    //             console.log(value);
    //         }
    //     } 
    //     catch(e) {
    //         console.log(e);
    //     }
    // }

    // useEffect(() => {
    //     storeData('profondeur', profondeur);
    //     storeData('ratioChaine', ratioChaine);
    //     storeData('calibrage', calibrage);
    //     storeData('deploy', deploy);
    // });


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