import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import TextField from '@/components/text_fields/text_field'; // adjust path as needed
import {ElevatedButton} from '@/components/buttons/elevated_button'; // adjust path as needed
import { BeveledButton } from '@/components/buttons/beveled_button';
import { HaveAccountText } from '@/components/already_account';
import { logoName } from '@/constants/texts';
import { AppBar } from '@/components/app_bar';
import useFormStore from '@/stores/forms/form';
import { Welcome } from '@/components/text/welcome';

export default function Signup() {

    const verifyFields= useFormStore((state)=> state.verifyFields1)

  return (
    <View style={styles.container}>
        <AppBar/>
      <Welcome></Welcome>
      <View style={{ height: 40 }} />
      <Text style={styles.titleTextB}>Sign up</Text>
      <View style={{ height: 40 }} />
      <TextField fieldKey="firstName" label="First Name"   placeholder="rimel" />
      <TextField fieldKey="lastName" label="Last Name"  placeholder="arab"/>
      <TextField fieldKey="phone" label="Phone Number"  placeholder="example:0556677225" />
      <BeveledButton
      borderColor='#54BD95'
      textStyle={{color:"#54BD95"}}
        color="#00000000"
        title="Continue"
        onPress={() => {
            // if(verifyFields()){
                              router.push('/(login)/signup2');
                            // }
                            // else{
                                // console.log("invalidCredentials")
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
