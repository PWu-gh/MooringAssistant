import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

import styles from "../styles/styles";

export default function CVision({ navigation }) {

  const pressHandler = () => navigation.goBack();


  return (
    <View style= {styles.useScreen}>
        <View style={styles.msgVis}>
            <Text>Nombre de tours</Text>
        </View>

		<View style={styles.camBox}></View>

		<View style={styles.gauge}></View>

		<View style={styles.btnCam}>
			<TouchableOpacity onPress={console.log("yep")} style={styles.btnContainer}>
				<Text style={styles.btnText}>OK</Text>
			</TouchableOpacity>
		</View>
    </View>
  );
}