import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Provided data
const data = {
  contacts: [
    {
      id: 1,
      client_id: 101,
      latitude: 36.75,
      longitude: 3.06,
      min_budget: 50000,
      max_budget: 150000,
      desired_area_min: 70.0,
      desired_area_max: 120.0,
      property_type: 'apartment',
      floors: 2,
      rooms: 3,
      has_parking: true,
      distance_to_city_center: 5.2,
      hospital_nearby: true,
      police_station_nearby: false,
      fire_station_nearby: true,
      public_transport_accessible: true,
      created_at: '2025-07-18T09:30:00',
    },
    {
      id: 2,
      client_id: 102,
      latitude: 36.76,
      longitude: 3.07,
      min_budget: 60000,
      max_budget: 130000,
      desired_area_min: 65.0,
      desired_area_max: 110.0,
      property_type: 'house',
      floors: 1,
      rooms: 4,
      has_parking: false,
      distance_to_city_center: 8.0,
      hospital_nearby: false,
      police_station_nearby: true,
      fire_station_nearby: false,
      public_transport_accessible: true,
      created_at: '2025-07-17T15:10:00',
    },
    {
      id: 3,
      client_id: 103,
      latitude: 36.74,
      longitude: 3.08,
      min_budget: 70000,
      max_budget: 160000,
      desired_area_min: 80.0,
      desired_area_max: 140.0,
      property_type: 'apartment',
      floors: 3,
      rooms: 5,
      has_parking: true,
      distance_to_city_center: 4.5,
      hospital_nearby: true,
      police_station_nearby: true,
      fire_station_nearby: false,
      public_transport_accessible: false,
      created_at: '2025-07-16T18:45:00',
    },
    {
      id: 4,
      client_id: 104,
      latitude: 36.77,
      longitude: 3.09,
      min_budget: 55000,
      max_budget: 140000,
      desired_area_min: 75.0,
      desired_area_max: 125.0,
      property_type: 'studio',
      floors: 0,
      rooms: 2,
      has_parking: false,
      distance_to_city_center: 10.0,
      hospital_nearby: true,
      police_station_nearby: true,
      fire_station_nearby: true,
      public_transport_accessible: true,
      created_at: '2025-07-15T14:00:00',
    },
    {
      id: 5,
      client_id: 105,
      latitude: 36.78,
      longitude: 3.10,
      min_budget: 48000,
      max_budget: 125000,
      desired_area_min: 60.0,
      desired_area_max: 100.0,
      property_type: 'house',
      floors: 1,
      rooms: 3,
      has_parking: true,
      distance_to_city_center: 6.5,
      hospital_nearby: false,
      police_station_nearby: false,
      fire_station_nearby: false,
      public_transport_accessible: false,
      created_at: '2025-07-14T12:00:00',
    },
    {
      id: 6,
      client_id: 106,
      latitude: 36.79,
      longitude: 3.11,
      min_budget: 90000,
      max_budget: 170000,
      desired_area_min: 85.0,
      desired_area_max: 130.0,
      property_type: 'villa',
      floors: 2,
      rooms: 6,
      has_parking: true,
      distance_to_city_center: 3.0,
      hospital_nearby: true,
      police_station_nearby: true,
      fire_station_nearby: false,
      public_transport_accessible: true,
      created_at: '2025-07-13T08:25:00',
    },
    {
      id: 7,
      client_id: 107,
      latitude: 36.70,
      longitude: 3.08,
      min_budget: 65000,
      max_budget: 120000,
      desired_area_min: 70.0,
      desired_area_max: 90.0,
      property_type: 'apartment',
      floors: 2,
      rooms: 3,
      has_parking: false,
      distance_to_city_center: 9.0,
      hospital_nearby: false,
      police_station_nearby: false,
      fire_station_nearby: true,
      public_transport_accessible: false,
      created_at: '2025-07-12T16:00:00',
    },
    {
      id: 8,
      client_id: 108,
      latitude: 36.71,
      longitude: 3.11,
      min_budget: 72000,
      max_budget: 155000,
      desired_area_min: 90.0,
      desired_area_max: 150.0,
      property_type: 'house',
      floors: 2,
      rooms: 4,
      has_parking: true,
      distance_to_city_center: 2.5,
      hospital_nearby: true,
      police_station_nearby: false,
      fire_station_nearby: true,
      public_transport_accessible: true,
      created_at: '2025-07-11T10:00:00',
    },
    {
      id: 9,
      client_id: 109,
      latitude: 36.72,
      longitude: 3.14,
      min_budget: 60000,
      max_budget: 110000,
      desired_area_min: 50.0,
      desired_area_max: 80.0,
      property_type: 'studio',
      floors: 0,
      rooms: 1,
      has_parking: false,
      distance_to_city_center: 11.0,
      hospital_nearby: false,
      police_station_nearby: false,
      fire_station_nearby: false,
      public_transport_accessible: false,
      created_at: '2025-07-10T11:45:00',
    },
    {
      id: 10,
      client_id: 110,
      latitude: 36.73,
      longitude: 3.15,
      min_budget: 55000,
      max_budget: 145000,
      desired_area_min: 60.0,
      desired_area_max: 110.0,
      property_type: 'apartment',
      floors: 1,
      rooms: 2,
      has_parking: true,
      distance_to_city_center: 7.8,
      hospital_nearby: true,
      police_station_nearby: true,
      fire_station_nearby: true,
      public_transport_accessible: true,
      created_at: '2025-07-09T09:00:00',
    },
  ],
  property: {
    id: 501,
    agent_id: 9001,
    latitude: 36.75,
    longitude: 3.06,
    price: 115000.0,
    area_surface: 95.0,
    property_type: 'apartment',
    floors: 2,
    rooms: 3,
    description: 'Modern apartment near downtown with spacious rooms and private parking.',
    has_parking: true,
    distance_to_city_center: 4.2,
    hospital_nearby: true,
    police_station_nearby: true,
    fire_station_nearby: true,
    public_transport_accessible: true,
    created_at: '2025-07-18T10:15:00',
  },
};

const MapScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Initial region centered on Algiers, Algeria
  const initialRegion = {
    latitude: 36.7538,
    longitude: 3.0588,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  };

  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
      >
        {/* Property Marker */}
        <Marker
          coordinate={{ latitude: data.property.latitude, longitude: data.property.longitude }}
          title={`Property: ${data.property.property_type}`}
          description={`${data.property.description} - ${data.property.price} DA`}
          pinColor="red"
          onPress={() => setSelectedItem({ ...data.property, type: 'property' })}
        />

        {/* Contact Markers */}
        {data.contacts.map((contact) => (
          <Marker
            key={contact.id}
            coordinate={{ latitude: contact.latitude, longitude: contact.longitude }}
            title={`Client ${contact.client_id}`}
            description={`${contact.property_type} - Budget: ${contact.min_budget}-${contact.max_budget} DA`}
            onPress={() => setSelectedItem({ ...contact, type: 'contact' })}
          />
        ))}
      </MapView>

      {/* Contact List */}
      {/* <ScrollView style={styles.contactList}>
        {data.contacts.map((contact) => (
          <TouchableOpacity
            key={contact.id}
            style={styles.contactCard}
            onPress={() => setSelectedItem({ ...contact, type: 'contact' })}
          >
            <Text style={styles.contactTitle}>Client {contact.client_id} - {contact.property_type}</Text>
            <Text style={styles.contactDetail}>Budget: {contact.min_budget} - {contact.max_budget} DA</Text>
            <Text style={styles.contactDetail}>Area: {contact.desired_area_min} - {contact.desired_area_max} m²</Text>
            <Text style={styles.contactDetail}>Rooms: {contact.rooms}, Floors: {contact.floors}</Text>
            <Text style={styles.contactDetail}>
              {contact.has_parking ? 'Parking Available' : 'No Parking'}
            </Text>
            <Text style={styles.contactDetail}>
              Distance to City: {contact.distance_to_city_center} km
            </Text>
            <Text style={styles.contactDetail}>
              Nearby: {[
                contact.hospital_nearby && 'Hospital',
                contact.police_station_nearby && 'Police',
                contact.fire_station_nearby && 'Fire Station',
                contact.public_transport_accessible && 'Public Transport',
              ]
                .filter(Boolean)
                .join(', ')}
            </Text>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Contact Client</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      {/* Popup for Selected Item */}
      {selectedItem && (
        <View style={styles.popup}>
          <Text style={styles.popupTitle}>
            {selectedItem.type === 'property'
              ? `Property: ${selectedItem.property_type}`
              : `Client ${selectedItem.client_id}`}
          </Text>
          {selectedItem.type === 'property' ? (
            <>
              <Text>{selectedItem.description}</Text>
              <Text>Price: {selectedItem.price} DA</Text>
              <Text>Area: {selectedItem.area_surface} m²</Text>
              <Text>Rooms: {selectedItem.rooms}, Floors: {selectedItem.floors}</Text>
              <Text>
                Nearby: {[
                  selectedItem.hospital_nearby && 'Hospital',
                  selectedItem.police_station_nearby && 'Police',
                  selectedItem.fire_station_nearby && 'Fire Station',
                  selectedItem.public_transport_accessible && 'Public Transport',
                ]
                  .filter(Boolean)
                  .join(', ')}
              </Text>
            </>
          ) : (
            <>
              <Text>Property Type: {selectedItem.property_type}</Text>
              <Text>Budget: {selectedItem.min_budget} - {selectedItem.max_budget} DA</Text>
              <Text>Area: {selectedItem.desired_area_min} - {selectedItem.desired_area_max} m²</Text>
              <Text>Rooms: {selectedItem.rooms}, Floors: {selectedItem.floors}</Text>
              <Text>
                Nearby: {[
                  selectedItem.hospital_nearby && 'Hospital',
                  selectedItem.police_station_nearby && 'Police',
                  selectedItem.fire_station_nearby && 'Fire Station',
                  selectedItem.public_transport_accessible && 'Public Transport',
                ]
                  .filter(Boolean)
                  .join(', ')}
              </Text>
            </>
          )}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedItem(null)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height ,
  },
  contactList: {
    flex: 1,
    padding: 10,
  },
  contactCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  contactDetail: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  contactButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  contactButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  popup: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MapScreen;