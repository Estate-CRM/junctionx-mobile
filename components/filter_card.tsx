import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, ViewProps } from "react-native"

interface FilterCardProps extends ViewProps{
    iconName: string,
    text1:string,
    text2:string,
}

export const FilterCard: React.FC<FilterCardProps>=({iconName, text1, text2, ...props})=>{
    <View style={{flexDirection:"row"}}>
        <Ionicons name={iconName}  size={24} /> 
        <View>
            
        </View>

    </View>

}