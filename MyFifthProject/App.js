
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const csulogo = {
  uri: "https://warnercnr.colostate.edu/wp-content/uploads/sites/2/2018/08/CSU-Ram-357-617.jpg",
}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground  source={csulogo} style={styles.image}>
        <Text style={styles.text}> CSU Logo </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: "blue",
    fontSize: 40,
    fontWeight: 'bold'

  }
});
