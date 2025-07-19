import ContactCard from "@/components/data/contact_properties";
import { FilterCard } from "@/components/filter_card";
import { InteractiveMap } from "@/components/map";
import { PropHeader } from "@/components/text/properties_header";
import Title from "@/components/text/title";
import SearchBar from "@/components/text_fields/search_bar";
import { TopBar } from "@/components/top_bar";
import { UpdateLocationCard } from "@/components/update_location_card";
import { Contact } from "@/models/contact";
import { FontAwesome6 } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";

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

    const contact: Contact = {
        id: 1,
        client_id: 101,
        latitude: 36.7525,
        longitude: 3.042,
        min_budget: 20,
        max_budget: 30,
        desired_area_min: 100,
        desired_area_max: 150,
        property_type: ["F3", "F4"],
        created_at: new Date("2025-07-18T10:30:00Z"),
      };
    return (
            <ScrollView style={{ padding: 12 }}>
                <TopBar title="" subTitle="" />
                <SearchBar label="search" placeholder="Search by city or address" />
                <Title  title="The most popular research"/>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
    <FilterCard
      icon={() => <FontAwesome6 name="city" size={24} color="#18A189" />}
      text1="City"
      text2="Algiers"
    />
    <FilterCard
      icon={() => <FontAwesome6 name="city" size={24} color="#18A189" />}
      text1="Type"
      text2="Apartment"
    />
    <FilterCard
      icon={() => <FontAwesome6 name="city" size={24} color="#18A189" />}
      text1="Surface"
      text2="150 m2"
    />
    <FilterCard
      icon={() => <FontAwesome6 name="money-bill" size={24} color="#18A189" />}
      text1="price"
      text2="9700000DA"
    />
    {/* Add more FilterCards as needed */}
  </View>
</ScrollView>
                <UpdateLocationCard />
                <View style={{height:10}}></View>
                <PropHeader text="Location"/>
                <View style={{height:10}}></View>
                <InteractiveMap containerStyle={{height:180}}/>
                <PropHeader text="Recommended Contacts"/>
                <ContactCard
                        contact={contact}
                        name="HADDAD Lina"
                        image="https://randomuser.me/api/portraits/women/45.jpg"
                        match="87%"
                        matchColor="#F97316"
                        location="Hydra, Kouba"
                      />
                      <ContactCard
                        contact={contact}
                        name="HADDAD Lina"
                        image="https://randomuser.me/api/portraits/women/45.jpg"
                        match="87%"
                        matchColor="#12B981"
                        location="Hydra, Kouba"
                      />


            </ScrollView>

    );
}
