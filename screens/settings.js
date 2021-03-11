import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Settings({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View>
      {/* <Text>ReviewDetails Screen</Text> */}
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}