import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const ForgotPassword: React.FC =()=>{
    return (
        <TouchableOpacity onPress={()=>{
            router.push("/(login)/forgot_password")
        }} style={{alignSelf:"flex-end", paddingHorizontal:6}}>
                        <Text style={{
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: 14,
                            lineHeight: 18,
                            display: "flex",
                            alignItems: "flex-end",
                            color: "#000000",
                        }
                        }>Forgot password?</Text>
        </TouchableOpacity>
    );
}