import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface ElevatedButtonProps {
  title: string;
  color: string;
  textColor:string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const styles = StyleSheet.create({
  button: {
    width: 354,
    height: 64,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
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

export const ElevatedButton: React.FC<ElevatedButtonProps> = ({
  title,
  color,
  textColor,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
