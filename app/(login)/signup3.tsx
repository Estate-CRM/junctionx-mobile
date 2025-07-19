import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import TextField from '@/components/text_fields/text_field'; // adjust path as needed
import {ElevatedButton} from '@/components/buttons/elevated_button'; // adjust path as needed
import { BeveledButton } from '@/components/buttons/beveled_button';
import { HaveAccountText } from '@/components/already_account';
import { logoName } from '@/constants/texts';
import ImageTextField from '@/components/text_fields/image_verification_field';
import { AppBar } from '@/components/app_bar';
import { Welcome } from '@/components/text/welcome';

export default function Signup() {



  return (
    <View style={styles.container}>
              <AppBar/>
      <Welcome></Welcome>
      <View style={{ height: 40 }} />
      <Text style={styles.titleTextB}>Sign up</Text>
      <View style={{ height: 40 }} />
      <ImageTextField fieldKey="email" label="national Id" placeholder='scan your national id card'/>
      <ImageTextField fieldKey="password" label="Commercial Register" placeholder='scan your commercial register' />
      <BeveledButton
            borderColor='#54BD95'
            textStyle={{color:"#54BD95"}}
              color="#00000000"
              title="Verify"
              onPress={() => {
              }}
            />
                  <HaveAccountText text='Log in'/>
            
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
  fontFamily: "Poppins-700",
  fontSize: 30,
  lineHeight: 39,
  color: "#000000",
}
});
