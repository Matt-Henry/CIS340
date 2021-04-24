import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default function MyScrollViewAppr() {

  const dog = {
    uri: 'https://wonderfulengineering.com/wp-content/uploads/2014/01/highway-wallpapers-15.jpg',
    width: 64,
    height: 64
  }

  return (
    <ScrollView style={{padding: 40}}>
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={require('./assets/highway-wallpapers-15.jpg')} style={{width: 64, height: 64}} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
    </ScrollView>

  );
}
