import React , { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class myApp extends Component {

  constructor(props) {
    super(props)
    this.state = {count: 0};
  }

  onTap = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const {count} = this.state;
  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
        <Text>Counter: {count}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={onTap}></TouchableOpacity>
        <Text>Text</Text>
      </View>
      
    </View>
  );
}
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
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10, 
  },

  counterText: {
    alignItems: 'center',
    padding: 10
  }
});
