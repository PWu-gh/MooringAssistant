import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, SafeAreaView , Button} from "react-native";
import Navigator from './routes/navigator';
import styles from "./styles/styles"


console.log("go");
StatusBar.setBarStyle('light-content', true);
export default function App() {
	return (
		<SafeAreaView style={styles.screen}>
			<Navigator/>
		</SafeAreaView>

	);
}









