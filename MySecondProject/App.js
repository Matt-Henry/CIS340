import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

function App() {
  
  return (
    <View>
      <Text>
        I am a student in CIS340! {"\n"}
        <TextInput style = {{ borderWidth: 1}} defaultValue="Enter Information"></TextInput >
      </Text>
    </View>
    
  );
}

export default function Comp(){
  return(
    <View style={{flex: 1, justifyContent: "Center", alignItems: "Center"}}>
      <Text>
        Some Text Here!
      </Text>
      <App />
      <App />
    </View>

  )
    


  
}

