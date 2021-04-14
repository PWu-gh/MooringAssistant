import React, { Component, useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import styles from '../styles/styles'
import palette from '../styles/palette';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Gauge({ gaugeValue, gaugeMax, profond }){
	const percentGauge = (gaugeValue*100/gaugeMax) > 100 ? 100: (gaugeValue*100/gaugeMax);
	const dynamicStyle = StyleSheet.create({
		progressGauge:{
			backgroundColor: palette.rope,
			height:15,
			borderRadius:5,
			width: percentGauge+'%',
		},
		gaugeCont:{
			flex:1,
			// height: 80,
			maxHeight:100,
			alignItems:'center',
			justifyContent:'center',
			width:'100%',
		},
		gauge:{
			backgroundColor: 'grey',
			height:15,
			width:'80%',
			borderRadius:20,
			backgroundColor:'grey',
		},
	
		gaugeVal:{
			fontWeight: 'bold',
			fontSize:18,
		},
		gaugeLegend:{
			width:"80%",
			flexDirection: 'row',
			justifyContent:'space-between'
		},
		anchorBox:{
			position:'absolute',
			left: percentGauge+'%',

		},
		anchor:{
			position: 'absolute',
			height:80,
			resizeMode: 'contain',
			top: 3,
			left: -70,
		}

	})
	let valRatio = gaugeValue/ profond;
	return(
		<View style={dynamicStyle.gaugeCont}>
			<Text style={dynamicStyle.gaugeVal}>{gaugeValue} (x{valRatio}) </Text>
			<View style={dynamicStyle.gauge}>
				<View style={dynamicStyle.progressGauge}></View>
				<View style={dynamicStyle.anchorBox}>
					<Image style={dynamicStyle.anchor} source={require('../assets/img/anchor2.png')}/>		
				</View>
			</View>
			{/* <Image style={dynamicStyle.anchor} source={require('../assets/img/ancre.png')}/> */}

			<View style={dynamicStyle.gaugeLegend}>
				<Text >0</Text>
				<Text >{gaugeMax}</Text>
			</View>		
		</View>
	)

};


