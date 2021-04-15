import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from "../styles/styles";
import {DataContext} from "../components/DataContext"
import Gauge from "../components/gauge"

export default function CVision({ navigation }) {
	const pressHandler = () => navigation.navigation.navigate('Home');

  	// context val
	const { stateProf, stateCali, stateRatio, stateDeploy } = useContext(DataContext);
	const [profondeur, setProfondeur] = stateProf;
	const [ratioChaine, setRatioChaine] = stateRatio;
	const [calibrage, setCalibrage] = stateCali;
	const [deploy, setDeploy] = stateDeploy;

	let nbGuindeau = Number((profondeur*ratioChaine /(calibrage/100)).toFixed(1)); // warn: profondeur(m), calibrage(cm)
	let lDeploy = Number((profondeur * ratioChaine).toFixed(1));

	return (
		<ImageBackground source={require('../assets/img/backwater.png')} style= {styles.useScreen}>
			<View style={styles.infoVisCont}>
				<View style={styles.infoVis}>
					<Text style={styles.textStyle}>Longueur à déployer : {}</Text>
					<Text style={styles.valueVis}>{lDeploy}m</Text>
				</View>
				<View style={styles.infoVis}>
					<Text style={styles.textStyle}>Tours de guindeau : </Text>
					<Text style={styles.valueVis}>{nbGuindeau}</Text>
				</View>
			</View>

			{/* TO DO */}
			<View style={styles.camBox}></View>

			{/* Replace deploy by computer vision value */}
			<Gauge gaugeValue={deploy} gaugeMax={lDeploy} profond={profondeur}></Gauge>

			<View style={styles.btnCam}>
				<TouchableOpacity onPress={()=> setDeploy(deploy+2)} style={styles.btnContainer}>
				<Text style={styles.btnText}>Start</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}