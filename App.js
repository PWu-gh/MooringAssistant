import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, SafeAreaView, TouchableHighlight, Image  } from "react-native";
import {StyleSheet, StatusBar, Platform  } from "react-native";
import Navigator from './routes/navigator';
import styles from "./styles/styles"
import palette from "./styles/palette"
import Statusbar from "./styles/styles"

console.log("go");
export default function App() {
	return (
		// <Home />
		// <Navigator/>
		<View style={styles.screen}>
			<StatusBar/>
			<Navigator/>
		</View>
	);
}













