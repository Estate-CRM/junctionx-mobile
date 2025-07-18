import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import TextField from '@/components/text_fields/text_field'; // adjust path as needed
import {ElevatedButton} from '@/components/buttons/elevated_button'; // adjust path as needed
import { BeveledButton } from '@/components/buttons/beveled_button';
import { AppBar } from '@/components/app_bar';

export default function Signup() {



  return (
    <View style={styles.container}>
      <AppBar/>
      <Text style={styles.titleText}>Forget password</Text>
      <View style={{ height: 10 }} />
      <Text style={styles.titleTextB}>Don't worry! It happens. Please enter the email associated with your account.</Text>
      <View style={{ height: 40 }} />
      <TextField fieldKey="email" label="Email Address" placeholder='example@gmail.com' />
      
      <BeveledButton
                  borderColor='#54BD95'
                  textStyle={{color:"#FFFFFF"}}
                    color="#54BD95"
                    title="Send code"
                    onPress={() => {
                    }}
                  />
    </View>
  );
}

const styles = StyleSheet.create({

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 24,
  },
    titleText:{
  fontFamily: "Poppins-700",
  fontSize: 30,
  lineHeight: 39,
  color: "#18A189",
},
titleTextB:{
  width: 353,
  height: 40,
  fontStyle: "normal",
  fontSize: 16,
  lineHeight: 20,
  display: "flex",
  alignItems: "flex-end",
  color: "#000000B3",
}
});
