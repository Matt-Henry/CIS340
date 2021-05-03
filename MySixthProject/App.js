
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Component } from 'react';

export default class TouchableButton extends Component {
  
  _onPressButton() { 
    alert("Button pressed!") 
  }

  render(){
  return (
    <View style={styles.container}>

      <View style={styles.containerButton}>
        <Button onPress={this._onPressButton} title="Button 1" />
      </View>

      <View style={styles.containerLayoutButton}>
      <Button onPress={this._onPressButton} title="Button 2" />
      </View>

      <View style={styles.containerLayoutButton}>
        <Button onPress={this._onPressButton} title="Great" color='green' />
      </View>

      <View style={styles.containerLayoutButton}>
        <Button onPress={() => {alert("Tap Tap");}} title="Tap^2" color="purple" />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 20   
  },

  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
