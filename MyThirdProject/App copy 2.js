import React, {Component, useState} from 'react';
import { Text, TestInput, View, TextInput } from 'react-native';

export default function WordConvertor() {
  const [text, setText]=useState('');
  return (
    <View style={{padding: 40}}>
      <TextInput style={{height: 40, borderWidth: 1}} placeholder="Input your text!" onChangeText={text => setText(text)} defaultValue={text} />
        <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map((word) => word && '*').join(' ')}
        </Text>
    </View>
  );
};
