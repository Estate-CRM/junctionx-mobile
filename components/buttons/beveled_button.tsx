import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface BeveledButtonProps {
  title: string;
  color: string;
  borderColor:string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const styles = StyleSheet.create({
  button: {
    width: 354,
    height: 64,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    fontFamily: "Poppins-600",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    color: "#101219",
  },
});

export const BeveledButton: React.FC<BeveledButtonProps> = ({
  title,
  color,
  borderColor,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {width:"100%", alignSelf:"center", backgroundColor: color, borderColor: borderColor, borderWidth:1}, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
