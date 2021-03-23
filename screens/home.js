import React, { useContext }  from 'react';
import {View, Text, TouchableHighlight, Image  } from "react-native";

import styles from "../styles/styles"
import {DataContext} from "../components/DataContext"

export default function home({ navigation }) {
    let pressHandler;
    function goto(destination){
        pressHandler = ()=> navigation.navigate(destination);
        return pressHandler;
    }

    // context val
    const { stateProf, stateCali, stateRatio, stateDeploy } = useContext(DataContext);
    const [profondeur, setProfondeur] = stateProf;
    const [ratioChaine, setRatioChaine] = stateRatio;
    const [calibrage, setCalibrage] = stateCali;
    const [deploy, setDeploy] = stateDeploy;

    let recover = profondeur==0 && ratioChaine==0 && calibrage==0  && deploy==0;

    return (
        <View style= {styles.useScreen}>
            <View style={styles.btnView}>

                { recover ? 

                <View/> 
                    : 
                <TouchableHighlight style= {styles.menuBtn} onPress= { goto('CVision') }>
                    <View >
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
            </View>

        </View>

    );
}
