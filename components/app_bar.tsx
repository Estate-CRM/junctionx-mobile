import { Feather } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const styles= StyleSheet.create({
    iconContainer: {
    justifyContent: 'center',
    paddingRight: 8,
    paddingTop: 4,

  },
  
})


export const AppBar:React.FC=()=>{

const navigation= useNavigation()
return(<View style={{height:50, marginVertical: 20}}>
        <TouchableOpacity style={styles.iconContainer} onPress={()=>{navigation.goBack()}}>
            <Feather name="arrow-left" size={24} color="#000000" />
          </TouchableOpacity>
    </View>);
}
