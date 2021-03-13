import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function CVision({ navigation }) {

  const pressHandler = () => navigation.goBack();


  return (
    <View>
      {/* <Text>ReviewDetails Screen</Text> */}
      {/* <Button title='OK' onPress={pressHandler} /> */}
    </View>
  );
}