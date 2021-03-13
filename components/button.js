import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../styles/styles'


export default butApp = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
	  <Text style={styles.appButtonText}>{title}</Text>
	</TouchableOpacity>
);
