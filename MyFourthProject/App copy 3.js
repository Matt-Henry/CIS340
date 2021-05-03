
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

export default function App() {
  return (
    <View style={{height: 600}}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'black'}} />
      <View style={{flex: 3, backgroundColor: 'blue'}} />
    </View>

  );
}