import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import TextField from '@/components/text_fields/text_field'; // adjust path as needed
import {ElevatedButton} from '@/components/buttons/elevated_button'; // adjust path as needed
import { BeveledButton } from '@/components/buttons/beveled_button';
import { HaveAccountText } from '@/components/already_account';
import { logoName } from '@/constants/texts';
import PasswordTextField from '@/components/text_fields/password_text_field';
import { AppBar } from '@/components/app_bar';
import useFormStore from '@/stores/forms/form';

export default function Signup() {

    const verifyFields= useFormStore((state)=> state.verifyFields2)

  return (
    <View style={styles.container}>
              <AppBar/>
      <Text style={styles.titleText}>Welcome in {logoName}</Text>
      <View style={{ height: 40 }} />
      <Text style={styles.titleTextB}>Sign up</Text>
      <View style={{ height: 40 }} />
      <TextField fieldKey="email" label="Email Address" placeholder='example@gmail.com' />
      <PasswordTextField fieldKey="password" label="Create a password" placeholder='must be 8 characters'/>
      <PasswordTextField fieldKey="passwordReset" label="Confirm password" placeholder='repeat password'/>
      <BeveledButton
            borderColor='#54BD95'
            textStyle={{color:"#FFFFFF"}}
              color="#54BD95"
              title="Continue"
              onPress={() => {
                // if(verifyFields()){
                  router.push('/(login)/signup3');
                // }
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
