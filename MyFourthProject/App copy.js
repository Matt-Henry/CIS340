import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.yellow}>Yellow text!</Text>
      <Text style={styles.largeGreen}>Large green text!</Text>
      <Text style={[styles.yellow, styles.largeGreen]}>Some more text, then large green!</Text>
      <Text style={[styles.largeGreen, styles.yellow]}>Big green, then yellow text!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 60,
    backgroundColor: 'black'

  },

  largeGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  yellow: {
    color: 'yellow',
    fontSize: 20,
  }

});

