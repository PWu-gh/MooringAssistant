import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, SafeAreaView , Button} from "react-native";
import Navigator from './routes/navigator';
import Home from './screens/home';
import styles from "./styles/styles";
import { DataProvider } from "./components/DataContext";

console.log("go");
StatusBar.setBarStyle('light-content', true);
export default function App() {
	return (
		<DataProvider>
			<SafeAreaView style={styles.screen}>
					<Navigator/>
			</SafeAreaView>
		</DataProvider>


	);
}









