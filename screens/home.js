import React, { useContext, useEffect }  from 'react';
import {View, Text, TouchableHighlight, Image, AppState  } from "react-native";

import styles from "../styles/styles"
import {DataContext} from "../components/DataContext"

export default function home({ navigation }) {
    let pressHandler;
    function goto(destination){
        pressHandler = ()=> navigation.navigate(destination);
        return pressHandler;
    }
    // useEffect(() => {
    //     // console.log(AppState._supportedEvents)
	// 	appStateChange;
	//  });
	
    // const appStateChange = () => {
    //     // if( !AppState._supportedEvents.includes('change')){
    //         AppState.addEventListener('change', handleAppStateChange);
	
    //         return () => {
    //           AppState.removeEventListener('change', handleAppStateChange);
    //         };
    //     // }
    // }

	// const handleAppStateChange = (nextAppState) => {
	//   if (nextAppState!= 'active') {
	// 	console.log('test '+ nextAppState)
	//   }    
	//   else{
	// 	  console.log('test '+ nextAppState)
	//   }
	// }


    // context val
    const { stateProf, stateCali, stateRatio, stateDeploy } = useContext(DataContext);
    const [profondeur, setProfondeur] = stateProf;
    const [ratioChaine, setRatioChaine] = stateRatio;
    const [calibrage, setCalibrage] = stateCali;
    const [deploy, setDeploy] = stateDeploy;

    let recover = profondeur==0 && ratioChaine==0 && calibrage==0  && deploy==0;

    let date = new Date();
    let day = ("0" + date.getDate()).slice(-2); //To get the Current Date
    let month = ('0' + (date.getMonth() + 1)).slice(-2); //To get the Current Month
    let year = date.getFullYear().toString().slice(-2); //To get the Current Year
    let hour = ("0" + date.getHours()).slice(-2); //To get the Current Hours
    let min = ("0" + date.getMinutes()).slice(-2); //To get the Current Minutes

    let currentDate = hour+":"+min + "  "+ day + "-"+ month+"-"+ year ;



    return (
        <View style= {styles.useScreen}>
            <View style={styles.btnView}>

                { recover ? 

                <View/> 
                    : 
                <TouchableHighlight style= {styles.menuBtn} onPress= { goto('CVision') }>
                    <View>
                        <Text style={styles.textStyle}>{currentDate}</Text>
                        <Text style={styles.textHighlight}> Continuer manoeuvre</Text>
                        <View style={styles.center}>
                            <Text style={styles.textStyle}>Profondeur : {profondeur}</Text>
                            <Text style={styles.textStyle}>Ratio chaine : {ratioChaine}</Text>
                            <Text style={styles.textStyle}>Long. / tour : {calibrage}</Text>
                            <Text style={styles.textStyle}>Long. déployé : {deploy}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                }
                <TouchableHighlight style= {styles.menuBtn} onPress= { goto('Settings') }>
                    <View>
                        <Text style={styles.textHighlight}> Nouvelle configuration</Text>
                        <Image style={styles.centerImg} source={require('../assets/img/plus.png')}/>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style= {styles.menuBtn} onPress= { goto('Historic') }>
                    <View>
                        <Text style={styles.textStyle}>hist</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>

    );
}
