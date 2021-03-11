import React from 'react';
import {View, Text, SafeAreaView, TouchableHighlight, Image  } from "react-native";

import styles from "../styles/styles"

export default function home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Settings');
    }

    return (
        <View style= {styles.screen}>
            <View style={styles.btnView}>
                <TouchableHighlight style= {styles.menuBtn} onPress= {()=> console.log('test')}>
                    <View >
                        <Text style={styles.textParam}> Continuer manoeuvre</Text>
                        <View style={styles.subBtnTxt}>
                            <Text>Profondeur : {}</Text>
                            <Text>Long. / tour : {}</Text>
                            <Text>Long. déployé : {}</Text>
                        </View>
                    
                    </View>

                </TouchableHighlight>

                <TouchableHighlight style= {styles.menuBtn} onPress= { pressHandler }>
                    <View>
                        <Text style={styles.textParam}> Nouvelle configuration</Text>
                        <Image style={styles.centerImg} source={require('../assets/img/plus.png')}/>
                    </View>
                </TouchableHighlight>
            </View>

        </View>

    );
}
