import React from 'react';
import {StatusBar, SafeAreaView } from "react-native";
import Navigator from './routes/navigator';

import styles from "./styles/styles";
import { DataProvider } from "./components/DataContext";
import AppStateDetect from "./components/AppStateDetect";
import { useFonts } from 'expo-font';


StatusBar.setBarStyle('light-content', true); // white color statusBar text

export default function App() {

	// Load fonts
	const [loaded] = useFonts({
		Roboto: require('./assets/fonts/RobotoSlab-Regular.ttf'),
		Alice: require('./assets/fonts/Alice-Regular.ttf'),
	  });
	  
	if (!loaded) {
		return null;
	}

	// App structure
	return (
		<DataProvider>
			<SafeAreaView style={styles.screen}>
				<Navigator/>
				<AppStateDetect></AppStateDetect>
			</SafeAreaView>
		</DataProvider>
	);
}

