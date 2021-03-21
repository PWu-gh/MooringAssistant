import React, { useState } from 'react'

export const DataContext = React.createContext();
const dataUpdateContext = React.createContext();

export function DataProvider({ children }) {
    const [profondeur, setProfondeur] = useState(0);
    const [ratioChaine, setRatioChaine] = useState(0);
    const [calibrage, setCalibrage] = useState(0);
    const [deploy, setDeploy] = useState(0);


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