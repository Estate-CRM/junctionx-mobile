import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

interface HaveAccountProps extends ViewProps{
    text:string,
}

const styles=StyleSheet.create({
    text:{
  fontFamily: "'HelveticaNeue'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 15,
  letterSpacing: 0.5,
  color: "#A1A4B2",
},
txt:{
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 18,
  display: "flex",
  alignItems: "flex-end",
  color: "#000000B3",
},
txtB:{
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 14,
  lineHeight: 18,
  display: "flex",
  alignItems: "flex-end",
  color: "#000000",
},
})
export const HaveAccountText: React.FC<HaveAccountProps> = ({ text, ...props }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        alignContent: "space-between",
        alignSelf: "center",
        paddingVertical:10
      }}
      {...props}
    >
      <Text style={styles.txt}>Already have an account?  </Text>
      <TouchableOpacity onPress={()=>{
        router.push("/(login)/login");
      }}>
        <Text style={styles.txtB}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
