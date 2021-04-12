import React, { Component, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../styles/styles'
import palette from '../styles/palette';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Gauge({ gaugeValue, gaugeMax, profond }){
	const percentGauge = gaugeValue*100/gaugeMax;
	const dynamicStyle = StyleSheet.create({
		progressGauge:{
			backgroundColor: palette.primary,
			height:15,
			borderRadius:5,
			width: percentGauge+'%',
		}
	})
	let valRatio = gaugeValue/ profond;

	return(
		<View style={styles.gaugeCont}>
			<Text style={styles.gaugeVal}>{gaugeValue} (x{valRatio}) </Text>
			<View style={styles.gauge}>
				<View style={dynamicStyle.progressGauge}></View>
			</View>

			<View style={styles.gaugeLegend}>
				<Text >0</Text>
				<Text >{gaugeMax}</Text>
			</View>		
		</View>
	)

};


