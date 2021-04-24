import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default function MyScrollViewAppr() {

  const pic = {
    uri: 'https://wonderfulengineering.com/wp-content/uploads/2014/01/highway-wallpapers-15.jpg',
    width: 64,
    height: 64
  }

  return (
    <ScrollView style={{padding: 40}}>
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={require('./assets/highway-wallpapers-15.jpg')} style={{width: 64, height: 64}} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Text style={{fontSize: 80}}> Try to scroll down! </Text>
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
      <Image source={pic} />
    </ScrollView>

  );
}
