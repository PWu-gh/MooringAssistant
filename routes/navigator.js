import React from 'react';
import { View } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Settings from '../screens/settings';
import CVision from '../screens/cVision';
import Historic from '../screens/historic';

import styles from '../styles/styles';
import palette from "../styles/palette";



function headerStyle(Htitle, headerR){
	return({
		title: Htitle,
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitle,
		headerTintColor: palette.white,
		headerRight: () => headerR, // null or view or method
	})
}

const screens = {
	Home: {
		screen: Home,
		navigationOptions: headerStyle('Smart Anchor'),
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