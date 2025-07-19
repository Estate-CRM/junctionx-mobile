import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-600",
    fontSize: 18,
    lineHeight: 25,
    paddingVertical: 12,
  },
});

const Title: React.FC<{ title: string }> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;
