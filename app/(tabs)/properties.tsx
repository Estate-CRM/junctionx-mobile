import React from "react";
import { ScrollView } from "react-native";
import AiAnalyseCard from "@/components/cards/ai_analyse_card";
import ContactCard from "@/components/data/contact_properties";
import PropertyDetailsCard from "@/components/data/property_component";
import { PropHeader } from "@/components/text/properties_header";
import SearchBar from "@/components/text_fields/search_bar";
import { TopBar } from "@/components/top_bar";
import { Contact } from "@/models/contact";
import { Property } from "@/models/property";
import { mockProperties } from "@/constants/data/properties_data";

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

  const property : Property= mockProperties.at(0)!;

  return (
    <ScrollView>
      <TopBar title="" subTitle="" />
      <SearchBar label="search" placeholder="Search by city or address" />

      <PropHeader text="My properties" />
      <PropertyDetailsCard property={property} />

      <PropHeader text="Recommanded Contact" />
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
  );
}
