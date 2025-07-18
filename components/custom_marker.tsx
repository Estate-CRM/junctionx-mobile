import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface CustomMarkerProps {
  imageUri: string; // URL or base64
  percentage: number;
  color?: string;
}

export const CustomMarker: React.FC<CustomMarkerProps> = ({
  imageUri,
  percentage,
  color = "#18A189",
}) => {
  return (
    <View style={styles.markerContainer}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: imageUri }} style={styles.avatar} />
        <View style={[styles.badge, { backgroundColor: color }]}>
          <Text style={styles.badgeText}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  badge: {
    position: "absolute",
    bottom: -6,
    right: -6,
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 2,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
