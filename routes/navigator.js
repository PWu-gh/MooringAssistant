import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import Home from '../screens/home';
import Settings from '../screens/settings';
import CVision from '../screens/cVision';
import Historic from '../screens/historic';

import styles from '../styles/styles';
import palette from "../styles/palette";


function headerStyle(Htitle, headerR=null){
	return({
		title: Htitle,
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitle,
		headerTintColor: palette.lightSand,
		headerRight: () => headerR, // null or view or method
		headerTitleContainerStyle: {
			left: 0,
			right: 0,
		}
	})
}

const screens = {
	Home: {
		screen: Home,
		navigationOptions: headerStyle('Smart Anchor'),
	},
	Settings: {
		screen: Settings,
		navigationOptions : headerStyle('Configuration'),
	},
	CVision: {
		screen: CVision,
		navigationOptions : headerStyle('Computer Vision'),
	},
	Historic:{
		screen: Historic,
		navigationOptions : headerStyle('Historique'),
	}
};




// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);