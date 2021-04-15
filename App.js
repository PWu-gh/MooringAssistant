import React,{useEffect, useRef, useState, useContext} from 'react';
import 'react-native-gesture-handler';
import {StatusBar, SafeAreaView , AppState, Text} from "react-native";
import Navigator from './routes/navigator';

import styles from "./styles/styles";
import { DataProvider } from "./components/DataContext";
import AppStateDetect from "./components/AppStateDetect";

import { useFonts } from 'expo-font';



console.log("go");
StatusBar.setBarStyle('light-content', true); // white color text

export default function App() {
	const [loaded] = useFonts({
		Roboto: require('./assets/fonts/RobotoSlab-Regular.ttf'),
		Alice: require('./assets/fonts/Alice-Regular.ttf'),
	  });
	  
	if (!loaded) {
		return null;
	}

	return (
		<DataProvider>
			<SafeAreaView style={styles.screen}>
				<Navigator/>
				<AppStateDetect></AppStateDetect>
			</SafeAreaView>
		</DataProvider>
	);
}

