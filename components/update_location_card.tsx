import { Ionicons } from "@expo/vector-icons";
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const UpdateLocationCard: React.FC=()=>{
    return <TouchableOpacity>

    <View style={styles.container}>
        
        <Ionicons name="location" size={32} color={"#2853AF"}/>
        <Text style={styles.text}>You can change your location to show nearby client </Text>


    </View>
    </TouchableOpacity>

}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EFF4FF',
    borderWidth: 1.04,
    borderColor: '#BDD2FF',
    borderRadius: 10,
  },text: {
    width: 284,
    height: 54,
    fontFamily: 'Poppins-500', 
    fontSize: 16,
    lineHeight: 27,
    color: '#000000',
  },
});
