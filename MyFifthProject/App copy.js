import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const csulogo = {
  uri: "https://warnercnr.colostate.edu/wp-content/uploads/sites/2/2018/08/CSU-Ram-357-617.jpg",
  width: 80,
  height: 80
}

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.localCSULogo} source={require('./assets/csulogo.jpg')} />
      <Image style={styles.urlCSULogo} source={{uri: "https://warnercnr.colostate.edu/wp-content/uploads/sites/2/2018/08/CSU-Ram-357-617.jpg" }}/>
      <Image style={styles.stretchStyle} source={csulogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchStyle: {
    width: 50,
    height: 200,
    resizeMode: 'stretch'
  }
});
