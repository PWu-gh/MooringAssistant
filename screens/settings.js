import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';

import styles from "../styles/styles";
import SliderBox from "../components/sliderBox";
import {DataContext} from "../components/DataContext"

export default function Settings({ navigation }) {
	const pressHandler = () => navigation.goBack();
	const goNext = () => navigation.navigate('CVision');

	// context val
	const { stateProf, stateCali, stateRatio, stateDeploy } = useContext(DataContext);
	const [profondeur, setProfondeur] = stateProf;
	const [ratioChaine, setRatioChaine] = stateRatio;
	const [calibrage, setCalibrage] = stateCali;
	const [deploy, setDeploy] = stateDeploy;

	const [getPro, setPro] = useState(10);
	const [getRatio, setRatio] = useState(4);
	const [getCali, setCali] = useState(30);
	const [getDep, setDep] = useState(0);

	function setData(){
		setProfondeur(getPro);
		setRatioChaine(getRatio);
		setCalibrage(getCali);
		setDeploy(getDep);
	}

	return (
		<View style= {styles.useScreen}>

			<View style={styles.paramCont}>
				<SliderBox 
					title={"Pronfondeur de la Zone (m)"} 
					curVal={getPro} maxVal={30} 
					step={0.5}
					val={setPro}
				/>
				<SliderBox 
					title={"Ratio : ligne de mouillage / profondeur"} 
					curVal={getRatio} maxVal={6} 
					unit={' ×'}
					step ={0.1}
					val={setRatio}
				/>
				<SliderBox 
					title={"Calibrage : Lg. chaine / tour guindeau (cm)"} 
					curVal={getCali} maxVal={100} 
					step ={0.1}
					val={setCali}
				/>
				<SliderBox 
					title={"Longueur déployé (m)"} 
					curVal={getDep} maxVal={100} 
					step ={0.1}
					val={setDep}
				/>
			</View>
			<View style={styles.btnParamCont}>
				<TouchableOpacity 
					onPress={() => 	{	setData();
										goNext();
					}} 
					style={styles.btnContainer}
				>

					<Text style={styles.btnText}>Go !</Text>

				</TouchableOpacity>
			</View>
		</View>
	);
}