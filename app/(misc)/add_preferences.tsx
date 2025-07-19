import { InteractiveMap } from "@/components/map";
import { PropHeader } from "@/components/text/properties_header";
import PropertyTypeDropdown from "@/components/text_fields/property_type_dropdown";
import TextField from "@/components/text_fields/text_field";
import { TopBar } from "@/components/top_bar";
import TwoInputsRow from "@/components/two_input_row";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-600",
        fontSize: 18,
        lineHeight: 25,
    },
    normalText: {
        fontFamily: "Poppins-500",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 29,
        color: "#101219",
    },
})
export default function AddPreferences() {
    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 12 }}>
                <TopBar title="" subTitle="" />
                <Text style={[styles.title, { paddingVertical: 12 }]}>Create a new property</Text>
                <PropHeader text="Location" />
                <InteractiveMap containerStyle={{ height: 180 }} />
                <Text style={styles.normalText}>Budget</Text>
                <TextField  fieldKey="price" placeholder="price" leadingIcon="credit-card" />
                <Text style={styles.normalText}>Area</Text>
                <TextField  fieldKey="area" placeholder="area" leadingIcon="box" />
                <Text style={styles.normalText}>Type</Text>
                <PropertyTypeDropdown />
                <Text style={styles.normalText}>Filter</Text>
                <TextField  fieldKey="" placeholder="description" leadingIcon="sliders" />
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Ionicons name="image" size={40} />
                    </TouchableOpacity>
                    
                </View>

                <InteractiveMap />
            </ScrollView>
        </SafeAreaView>

    );
}
