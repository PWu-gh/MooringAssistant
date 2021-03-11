import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';


class Statusbar extends Component {

    render() {
        return (
            <View style={styles.StatusBar}>
                <StatusBar translucent backgroundColor="#5E8D48" barStyle="light-content" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    StatusBar: {
        height: Constants.statusBarHeight,
        backgroundColor: 'red'
    }
});

export default Statusbar;