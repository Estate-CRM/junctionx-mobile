import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import LogoName from "../assets/logo/logo_name_light.svg"

const styles = StyleSheet.create({
    normalText: {
        width: 262,
        height: 29,
        fontFamily: "Poppins-600",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 29,
        color: "#18A189",
    }, smallText: {
        width: 262,
        height: 38,
        fontFamily: "Poppins-300",
        fontStyle: "normal",
        fontSize: 12,
        lineHeight: 19,
        color: "#101219",
    }, container: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        paddingLeft: 20,
        paddingBottom:10,
        paddingRight: 20,
        paddingTop: 24,
    }
})
interface TopBarProps extends ViewProps {
    title: string,
    subTitle: string,
}

export const TopBar: React.FC<TopBarProps> = ({ title, subTitle, ...props }) => {
    
    return (<View style={styles.container }>
        <View style={{ width: 262}}>
            <View style={{ flexDirection: "row", justifyContent: "center"}}>
  <Text style={styles.normalText}>Welcome to </Text>
  <LogoName height={19} width={88} />
</View>
            <Text style={styles.smallText}>Connect properties to the right clients, instantly.</Text>
        </View>
        <View style={{width:20}}/>
        <Ionicons
              name={"open-outline"}
              color={"#919295"}
              size={24}
              style={{margin:12}}
            />
    </View>);
}