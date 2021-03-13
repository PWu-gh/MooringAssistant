import React from 'react';
import {View, Text, SafeAreaView, TouchableHighlight, Image  } from "react-native";

import styles from "../styles/styles"

export default function home({ navigation }) {
    let pressHandler;
    function goto(destination){
        pressHandler = ()=> navigation.navigate(destination);
        return pressHandler;
    }

    return (
        <View style= {styles.useScreen}>
            <View style={styles.btnView}>
                <TouchableHighlight style= {styles.menuBtn} onPress= { goto('CVision') }>
                    <View >
                        <Text style={styles.textStyle}> Continuer manoeuvre</Text>
                        <View style={styles.center}>
                            <Text style={styles.textStyle}>Profondeur : X{}</Text>
                            <Text style={styles.textStyle}>Long. / tour : X{}</Text>
                            <Text style={styles.textStyle}>Long. déployé : X{}</Text>
                        </View>
                    
                    </View>

                </TouchableHighlight>

                <TouchableHighlight style= {styles.menuBtn} onPress= { goto('Settings') }>
                    <View>
                        <Text style={styles.textStyle}> Nouvelle configuration</Text>
                        <Image style={styles.centerImg} source={require('../assets/img/plus.png')}/>
                    </View>
                </TouchableHighlight>
            </View>

        </View>

    );
}
