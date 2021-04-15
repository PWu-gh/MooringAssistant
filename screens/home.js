import React, { useContext}  from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground  } from "react-native";

import styles from "../styles/styles"
import {DataContext} from "../components/DataContext"

export default function home({ navigation }) {
    let pressHandler;
    function goto(destination){
        pressHandler = ()=> navigation.navigate(destination);
        return pressHandler;
    }

    // context val
    const { stateProf, stateCali, stateRatio, stateDeploy , time, date} = useContext(DataContext);
    const [profondeur, setProfondeur] = stateProf;
    const [ratioChaine, setRatioChaine] = stateRatio;
    const [calibrage, setCalibrage] = stateCali;
    const [deploy, setDeploy] = stateDeploy;

    let recover = profondeur==0 && ratioChaine==0 && calibrage==0  && deploy==0; 

    



    return (
        <ImageBackground source={require('../assets/img/backwater.png')} style= {styles.useScreen}>

            <TouchableOpacity style={styles.backtimeBtn} onPress={goto('Historic')}>
                <Image style={styles.bubble}source={require('../assets/img/bubble_vib.png')}/>
                <Image style={styles.backtime} source={require('../assets/img/backtime.png')}/>
            </TouchableOpacity>
        
            <View style={styles.btnView}>
                {/* if all data value == 0 , don't display continue manoeuvre */}
                { recover ? 

                <View/> 
                    : 
                //  Continue Manoeuvre
                <TouchableOpacity style= {styles.menuBtn} onPress= { goto('CVision') }>
                    <View style={styles.sflex}>
                        <View style={styles.continueMano}>
                            <Text style={styles.textHighlight}> Continuer manoeuvre</Text>
                            <Text style={styles.textStyle}>[{time}] {date}</Text>
                        </View>
                        <View style={styles.textBoxL2}>
                            <View style={styles.textBoxL1}>
                                <Text style={styles.textStyle}>Profondeur : {profondeur}</Text>
                            </View>
                            <View style={styles.textBoxL1}>
                                <Text style={styles.textStyle}>Calibrage : {calibrage}</Text>
                            </View>
                        </View>

                        <View style={styles.textBoxL2}>
                            <View style={styles.textBoxL1}>
                                <Text style={styles.textStyle}>Ratio : {ratioChaine}</Text>
                            </View>
                            <View style={styles.textBoxL1}>
                                <Text style={styles.textStyle}>Long. déployé : {deploy}</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
                }

                {/*  nouvelle config */}
                <TouchableOpacity style= {styles.menuBtn} onPress= { goto('Settings') }>
                    <View style={styles.btnView}>
                        <Text style={styles.textHighlight}> Nouvelle configuration</Text>
                        <Image style={styles.centerImg} source={require('../assets/img/plus.png')}/>
                    </View>
                </TouchableOpacity>

            </View>
        </ImageBackground>

    );
}
