import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import TextField from '@/components/text_fields/text_field'; // adjust path as needed
import { ElevatedButton } from '@/components/buttons/elevated_button'; // adjust path as needed
import { BeveledButton } from '@/components/buttons/beveled_button';

import { logoName } from '@/constants/texts';
import { AppBar } from '@/components/app_bar';
import { ForgotPassword } from '@/components/text/forgot_password';
import { Welcome } from '@/components/text/welcome';

export default function Signup() {
    return (
        <View style={styles.container}>
            <AppBar />
            <Welcome></Welcome>
            <View style={{ height: 40 }} />
            <Text style={styles.titleTextB}>Log in</Text>
            <View style={{ height: 40 }} />
            <TextField  fieldKey="email" label="Email Address" placeholder='example@gmail.com'/>
            <TextField  fieldKey="password" label="Password"  />
            
            <ForgotPassword/>
            <BeveledButton
                borderColor='#54BD95'
                textStyle={{ color: "#54BD95" }}
                color="#00000000"
                title="Continue"
                onPress={() => {
                    console.log("oh")
                    router.push('/(tabs)/profile');
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
    titleText: {
        fontFamily: "Poppins-700",
        fontSize: 30,
        lineHeight: 39,
        color: "#18A189",
    },
    titleTextB: {
        fontFamily: "Poppins-700",
        fontSize: 30,
        lineHeight: 39,
        color: "#000000",
    }
});
