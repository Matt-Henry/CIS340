import React , { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  const onTap = () => setCount(count => count + 1);

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
