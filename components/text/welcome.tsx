import React from "react"
import { Text, View } from "react-native"
import LogoName from "../../assets/logo/logo_name_light.svg";

export const Welcome: React.FC=()=>{
return (
  <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
    <Text style={{
      fontFamily: "Poppins-700",
      fontSize: 30,
      lineHeight: 39,
      color: "#18A189",
    }}>
      Welcome in 
    </Text>
    <LogoName height={30} width={150} style={{ marginLeft: 4 }} />
  </View>
);


}