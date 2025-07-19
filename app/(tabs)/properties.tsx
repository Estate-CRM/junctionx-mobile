import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-deck-swiper";
import AiAnalyseCard from "@/components/cards/ai_analyse_card";
import ContactCard from "@/components/data/contact_properties";
import PropertyDetailsCard from "@/components/data/property_component";
import { PropHeader } from "@/components/text/properties_header";
import SearchBar from "@/components/text_fields/search_bar";
import { TopBar } from "@/components/top_bar";
import { Contact } from "@/models/contact";
import { Property } from "@/models/property";
import { mockProperties } from "@/constants/data/properties_data";

const { width } = Dimensions.get("window");

export default function PropertiesLayout() {
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

  const properties: Property[] = mockProperties.slice(0, 5); // take first 5 mock properties

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <TopBar title="" subTitle="" />
        <SearchBar label="search" placeholder="Search by city or address" />

        <PropHeader text="My properties" />
        <View style={styles.swiperContainer}>
          <Swiper
            cards={properties}
            renderCard={(property) => (
              <PropertyDetailsCard key={property.id} property={property} />
            )}
            stackSize={3}
            cardIndex={0}
            backgroundColor="transparent"
            verticalSwipe={false}
            infinite={false}
            animateCardOpacity
            overlayLabels={{
              left: {
                title: "SKIP",
                style: {
                  label: {
                    color: "red",
                    fontSize: 24,
                  },
                },
              },
              right: {
                title: "LIKE",
                style: {
                  label: {
                    color: "green",
                    fontSize: 24,
                  },
                },
              },
            }}
          />
        </View>

        <PropHeader text="Recommended Contact" />
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

        <AiAnalyseCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 32,
    paddingTop: 16,
  },
  swiperContainer: {
    height: 430,
    width: width,
    alignItems: "center",
    marginBottom: 20,
  },
});
