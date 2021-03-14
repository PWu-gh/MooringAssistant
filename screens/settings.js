import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

import styles from "../styles/styles";
import SliderBox from "../components/sliderBox";


export default function Settings({ navigation }) {
	const pressHandler = () => navigation.goBack();
	const goNext = () => navigation.navigate('CVision');
	let A = 0;


	return (
		<View style= {styles.useScreen}>

			<View style={styles.paramCont}>
				<SliderBox 
					title={"Pronfondeur de la Zone (m)"} 
					curVal={10} maxVal={30} 
					unit={'m'}
					step={0.5}
				/>
				<SliderBox 
					title={"Ratio : ligne de mouillage / profondeur"} 
					curVal={4} maxVal={6} 
					unit={'x'}
					step ={0.1}
				/>
				<SliderBox 
					title={"Calibrage : long. chaine / tour de guindon (cm)"} 
					curVal={10} maxVal={30} 
					unit={'cm'}
					step ={0.1}
				/>
			</View>
			<View style={styles.btnParamCont}>
				<TouchableOpacity onPress={goNext} style={styles.btnContainer}>
					<Text style={styles.btnText}>OK</Text>
				</TouchableOpacity>
			</View>


		</View>
	);
}