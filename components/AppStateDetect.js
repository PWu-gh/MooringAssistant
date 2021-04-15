import { useContext, useEffect, useRef, useState } from 'react';
import { AppState} from 'react-native';
import {DataContext} from "./DataContext"

// import AsyncStorage  from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AppStateDetect() {
	// context val ( time et date, de la dernière modification de valeur)
	const { stateProf, stateCali, stateRatio, stateDeploy , time, date} = useContext(DataContext);
	const [profondeur, setProfondeur] = stateProf;
	const [ratioChaine, setRatioChaine] = stateRatio;
	const [calibrage, setCalibrage] = stateCali;
	const [deploy, setDeploy] = stateDeploy;

    // detect on change
	const appState = useRef(AppState.currentState);
	const [insert, setInsert] = useState(true);


    // This component detects when the user leaves the App and save the data into the historic before.


	useEffect(() => {
		AppState.addEventListener("change", _handleAppStateChange);
		return () => {
		AppState.removeEventListener("change", _handleAppStateChange);
		};
	}
    );

	const _handleAppStateChange = (nextAppState) => {
		if (nextAppState != "active") {
            insertData();

            if(insert){
                insertData();
                setInsert(false);
            }
            else{
                updateData();
            }
		}

	};


	// Storage on close
	async function storeData(key, data){
        try {
            await AsyncStorage.setItem(key, data)
        } 
        catch (e) {
          console.log(e);
        }
    }

    // insert last modification
    async function insertData(maxsize = 20){
        let dataObj = { prof: profondeur,
                        rati: ratioChaine,
                        cali:calibrage,
                        depl: deploy,
                        ctime: time,
                        cdate: date
                    };
        try {
            const val = await AsyncStorage.getItem('@hist');
            let dataRec = JSON.parse(val);
            if(dataRec == null){
                dataRec = [];
                dataRec.push(dataObj);
            }
            else{
                dataRec.push(dataObj);
                if(dataRec.length > maxsize) // on dépasse la taille max
                    { dataRec.shift(); }
    
            }
            storeData('@hist', JSON.stringify(dataRec));
        } 
        catch(e) {
            console.log(e);
        }
    }


    // modify last value of the database
    async function updateData(){
        let dataObj = { prof: profondeur,
                        rati: ratioChaine,
                        cali:calibrage,
                        depl: deploy,
                        ctime: time,
                        cdate: date
                    }
        try {
            const val = await AsyncStorage.getItem('@hist');
            let dataRec = JSON.parse(val)

            dataRec.pop()
            dataRec.push(dataObj)
            storeData('@hist', JSON.stringify(dataRec));
        } 
        catch(e) {
            console.log(e);
        }
    }

    // render nothing
	return ( 
		null      
	);
}
