import React , { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted==false){
      alert('I need permission!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
        <Image source={require('./assets/csulogo.jpg')} style={styles.csuLogo} />
        <Text style={styles.instruct}>Press the button to select an image!</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}></TouchableOpacity>
        <Text style={styles.buttonText}>Pick Image</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: 'green',
    padding: 10, 
    borderRadius: 5,

  },

  instruct: {
    fontSize: 18,
    color: 'red',
    marginHorizontal: 15,
    marginBottom: 10
  },

  csuLogo: {
    width: 305,
    height: 305,
    marginBottom: 20,

  },

  buttonText: {
    fontSize: 20,
    color: 'red'
  }
});
