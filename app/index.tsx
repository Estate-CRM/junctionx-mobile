import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { ElevatedButton } from '@/components/buttons/elevated_button';
import { router } from 'expo-router';

export default function Index() {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.contentBox}>
        <View style={{height:"50%"}}/>
        <Text style={styles.bigText}>Connect properties to the right clients, instantly.</Text>
        <View style={{height:20}}></View>
        <Text style={styles.smallText}>Discover a smarter way to match properties with clients, powered by AI-driven recommendations tailored to your needs.</Text>
        
        <View style={{height:55}}></View>
        <ElevatedButton title='Get Started' color='#FFFFFFFF' onPress={()=>{
          router.push('/(login)/signup1')
        }}/>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText:{
  width: 352,
  height: 126,
  fontFamily: "Poppins-600",
  fontStyle: "normal",
  fontWeight: '600',
  fontSize: 35,
  lineHeight: 42,
  color: "#FFFFFF",
},
smallText:{
  width: 354,
  height: 57,
  fontFamily: "Poppins-300",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: 16,
  lineHeight: 19,
  color: "#FFFFFF",
},
  contentBox: {
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
});
