import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ViewProps, StyleSheet } from "react-native";

interface FilterCardProps extends ViewProps {
  icon: React.FC<any>; // Accept any props for the icon (like size/color)
  text1: string;
  text2: string;
}

export const FilterCard: React.FC<FilterCardProps> = ({
  icon: Icon, // Rename to `Icon` to use as a component
  text1,
  text2,
  ...props
}) => {
    const styles= StyleSheet.create({
        text1:{
            fontSize:16,
            fontWeight:"500",
            lineHeight:25
        },
        text2:{fontSize:14, fontWeight: "400", color:"#666666", lineHeight: 22}
    })
  return (
    <View style={{ flexDirection: "row", alignItems: "center" ,borderRadius:10, borderWidth:1, borderColor:"#C4C4C4", paddingVertical:10, paddingLeft:8, paddingRight:20, marginHorizontal:2, marginBottom:30, marginTop:10}} {...props}>
      <Icon />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={ styles.text2}>{text2}</Text>
      </View>
    </View>
  );
};
