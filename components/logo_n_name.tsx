import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../assets/logo.svg";

export default function LogoName(){
    const styles= StyleSheet.create({text:{
        marginHorizontal:10,
  fontFamily: "Airbnb Cereal App",        
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 16,
  lineHeight: 21,
  letterSpacing: 2.25,
  color: "#3F414E",
}})
    return (
        <View style={{flexDirection: "row", alignItems:"center", alignContent:"space-between", padding:40, alignSelf:"center"}}>
            <Text style={styles.text}>Silent</Text>
            <Logo width={30} height={30}/>
            <Text style={styles.text}>Moon</Text>
        </View>
    );

}