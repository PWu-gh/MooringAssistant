import React, { Component, useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import styles from '../styles/styles'
import palette from '../styles/palette';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Gauge({ gaugeValue, gaugeMax, profond }){
	const percentGauge = (gaugeValue*100/gaugeMax) > 100 ? 100: (gaugeValue*100/gaugeMax);

	const fontStyle = 'Alice';
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
			color:palette.lightSand,
			bottom:5,
			fontFamily: fontStyle,
		},
		gaugeLegend:{
			width:"85%",
			flexDirection: 'row',
			justifyContent:'space-between',
			bottom:40,
			left:3,
		},
		textLegend:{
			fontWeight: 'bold',
			fontSize:18,
			color:palette.rope,
			fontFamily: fontStyle,
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
			left: -88,
		}

	})
	let valRatio = Number((gaugeValue/ profond).toFixed(2));
	return(
		<View style={dynamicStyle.gaugeCont}>
			<Text style={dynamicStyle.gaugeVal}>{gaugeValue}m  (x{valRatio}) </Text>
			{/* Dynamic gauge */}
			<View style={dynamicStyle.gauge}>
				<View style={dynamicStyle.progressGauge}></View>
				<View style={dynamicStyle.anchorBox}>
					<Image style={dynamicStyle.anchor} source={require('../assets/img/anchor_draw.png')}/>		
				</View>
			</View>

			{/* Max and min of the gauge */}
			<View style={dynamicStyle.gaugeLegend}>
				<Text style={dynamicStyle.textLegend}>0</Text>
				<Text style={dynamicStyle.textLegend}>{gaugeMax}</Text>
			</View>		
		</View>
	)

};


