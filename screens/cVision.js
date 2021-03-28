import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

import styles from "../styles/styles";
import {DataContext} from "../components/DataContext"
export default function CVision({ navigation }) {
	const pressHandler = () => navigation.goBack();

  	// context val
	const { stateProf, stateCali, stateRatio, stateDeploy } = useContext(DataContext);
	const [profondeur, setProfondeur] = stateProf;
	const [ratioChaine, setRatioChaine] = stateRatio;
	const [calibrage, setCalibrage] = stateCali;
	const [deploy, setDeploy] = stateDeploy;

	let nbGuindeau = (profondeur*ratioChaine /(calibrage/100)).toFixed(1); // warn: profondeur(m), calibrage(cm)
	let lDeploy = (profondeur * ratioChaine).toFixed(1);
	return (
		<View style= {styles.useScreen}>
			<View style={styles.infoVisCont}>
				<View style={styles.infoVis}>
					<Text style={styles.textStyle}>Tours de guindeau : </Text>
					<Text style={styles.valueVis}>{nbGuindeau}</Text>
				</View>
				<View style={styles.infoVis}>
					<Text style={styles.textStyle}>Longueur à déployer : {}</Text>
					<Text style={styles.valueVis}>{lDeploy}m</Text>
				</View>
			</View>

			<View style={styles.camBox}></View>

			<View style={styles.gaugeCont}>
				<View style={styles.gauge}>
					<View style={styles.gaugeProgress}></View>
				</View>
			</View>

			<View style={styles.btnCam}>
				<TouchableOpacity onPress={()=>console.log("watermelon")} style={styles.btnContainer}>
				<Text style={styles.btnText}>OK</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}