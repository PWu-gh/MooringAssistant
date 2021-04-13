import React from 'react';
import { View, Image , StyleSheet, TouchableOpacity} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import Home from '../screens/home';
import Settings from '../screens/settings';
import CVision from '../screens/cVision';
import Historic from '../screens/historic';

import styles from '../styles/styles';
import palette from "../styles/palette";
import { TouchableHighlight } from 'react-native-gesture-handler';



function headerStyle(Htitle, headerR, headerL){
	if(headerL != null){ // pour premiere page( sans goBack)
		return({
			title: Htitle,
			headerStyle: styles.header,
			headerTitleStyle: styles.headerTitle,
			headerTintColor: palette.white,
			headerRight: () => headerR, // null or view or method
			headerLeft:()=> headerL,
		})
	}
	return({
		title: Htitle,
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitle,
		headerTintColor: palette.white,
		headerRight: () => headerR, // null or view or method
	})
}

const localStyle = StyleSheet.create({
	touch:{
		height: "100%",
		aspectRatio: 1,
		justifyContent:'center',
	},
	backtime:{
		width: '60%',
		height: "60%",
		aspectRatio: 1,
		resizeMode: 'contain',
		alignSelf:'center',
	},
})

let hist = (
	<TouchableOpacity id="historia" style={localStyle.touch} onPress={()=> console.log(test)}>
		<Image style={localStyle.backtime} source={require('../assets/img/backtime.png')}/>
	</TouchableOpacity>
)

const screens = {
	Home: {
		screen: Home,
		navigationOptions: headerStyle('Smart Anchor',hist , <View/>),
	},
	Settings: {
		screen: Settings,
		navigationOptions : headerStyle('Configuration', <View/>),
	},
	CVision: {
		screen: CVision,
		navigationOptions : headerStyle('CVision', <View/>),
	},
	Historic:{
		screen: Historic,
		navigationOptions : headerStyle('Historique', <View/>),
	}
};




// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);