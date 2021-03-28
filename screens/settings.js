import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

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

	function setData(){
		setProfondeur(getPro);
		setRatioChaine(getRatio);
		setCalibrage(getCali);
		setDeploy(0);
	}

	return (
		<View style= {styles.useScreen}>

			<View style={styles.paramCont}>
				<SliderBox 
					title={"Pronfondeur de la Zone (m)"} 
					curVal={getPro} maxVal={30} 
					unit={'m'}
					step={0.5}
					val={setPro}
				/>
				<SliderBox 
					title={"Ratio : ligne de mouillage / profondeur"} 
					curVal={getRatio} maxVal={6} 
					unit={'x'}
					step ={0.1}
					val={setRatio}
				/>
				<SliderBox 
					title={"Calibrage : long. chaine / tour de guindeau (cm)"} 
					curVal={getCali} maxVal={100} 
					unit={'cm'}
					step ={0.1}
					val={setCali}
				/>
			</View>
			<View style={styles.btnParamCont}>
				<TouchableOpacity 
					onPress={() => 	{	setData();
										goNext();
					}} 
					style={styles.btnContainer}
				>

					<Text style={styles.btnText}>OK</Text>

				</TouchableOpacity>
			</View>
		</View>
	);
}