import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 999,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "#111827",
  },
  role: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
  },
  editBtn: {
    marginLeft: "auto",
    backgroundColor: "#E0F2F1",
    padding: 8,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    marginLeft: 12,
    color: "#111827",
  },
  logoutBtn: {
    marginTop: 30,
    backgroundColor: "#EF4444",
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginLeft: 8,
  },
});


export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Lamine Younes</Text>
          <Text style={styles.role}>Premium User</Text>
        </View>
        <TouchableOpacity style={styles.editBtn}>
          <Ionicons name="create-outline" size={18} color="#18A189" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Ionicons name="mail-outline" size={20} color="#18A189" />
        <Text style={styles.cardText}>lamine@example.com</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="call-outline" size={20} color="#18A189" />
        <Text style={styles.cardText}>+213 555 123 456</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="location-outline" size={20} color="#18A189" />
        <Text style={styles.cardText}>Algiers, Algeria</Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn}>
        <Ionicons name="log-out-outline" size={18} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

