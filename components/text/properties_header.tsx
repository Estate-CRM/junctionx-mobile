import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from "react-native";

interface P extends ViewProps{
    text:string
}

export const PropHeader: React.FC<P> = ({text}) => {
    const styles = StyleSheet.create({
        container: {

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12,

        },
        normalText: {
            fontFamily: "Poppins-500",
            fontStyle: "normal",
            fontSize: 18,
            lineHeight: 29,
            color: "#101219",
        }, linkText: {
            fontFamily: "Poppins-500",
            fontStyle: "normal",
            fontSize: 14,
            lineHeight: 22,
            color: "#2463EB",
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.normalText}>{text}</Text>
            <TouchableOpacity>
                <Text style={styles.linkText}>View all</Text>
            </TouchableOpacity>

        </View>
    );
}