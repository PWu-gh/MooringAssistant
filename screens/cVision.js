import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from "../styles/styles";
import {DataContext} from "../components/DataContext"
import Gauge from "../components/gauge"
import CameraComp from '../components/CameraComp';

export default function CVision({ navigation }) {
	const pressHandler = () => navigation.navigation.navigate('Home');

  	// Variable de DataContext (Utilisation: Historique (AsyncStorage))
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
					<Text style={styles.textStyle}>A déployer : {}</Text>
					<Text style={styles.valueVis}>{lDeploy}m</Text>
				</View>
				<View style={styles.infoVis}>
					<Text style={styles.textStyle}>Tours de guindeau : </Text>
					<Text style={styles.valueVis}>{nbGuindeau}</Text>
				</View>
			</View>

			{/* ///////////// Partie a compléter ///////////
				- implémentation du computer vision
				- recupération de la valeur 
				- donner la valeur a deploy ( setDeploy() )
			
			*/}

			<View style={styles.camBox}>
				<CameraComp></CameraComp>
			</View>

			{/* Gauge implémentation fonctionnelle */}
			<Gauge gaugeValue={deploy} gaugeMax={lDeploy} profond={profondeur}></Gauge>

			{/* Ne pas oublier de modifier le OnPress pour commencer/arreter le computer vision */}
			<View style={styles.btnCam}>
				<TouchableOpacity onPress={()=> setDeploy(deploy+2)} style={styles.btnContainer}>
				<Text style={styles.btnText}>Start</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}