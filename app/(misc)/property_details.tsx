import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Property } from '../../models/property'; // adjust import path
import usePropertyStore from '@/stores/property_detail';
import { defaultImage } from '@/constants/texts';
import { router } from 'expo-router';
import { InteractiveMap } from '@/components/map';

type Props = {
  property: Property;
};

const PropertyDetailsCard = () => {
  const property= usePropertyStore((state)=> state.property!);
  const mainImage =  property.images.length>0? property.images[0] : defaultImage;
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Your Property</Text>

      <Image source={{ uri: mainImage }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          {property.property_type} - {property.features[0] || 'No feature'}
        </Text>

        <View style={styles.locationRow}>
          <Feather name="map-pin" size={14} color="#999" />
          <Text style={styles.location}>Hydra, Algiers</Text>
        </View>

        <Text style={styles.price}>{property.price}M DA</Text>

        <View style={styles.mapSection}>
          <Text style={styles.mapLabel}>Location</Text>
          <TouchableOpacity onPress={()=>{
            router.push("/(misc)/map")
          }}>
            <Text style={styles.openMap}>Open Map</Text>
          </TouchableOpacity>
        </View>

        <InteractiveMap containerStyle={{height:180}}></InteractiveMap>

        <Text style={styles.detailsTitle}>Details</Text>

        <View style={styles.detailsRow}>
          <Feather name="maximize" size={14} color="#555" />
          <Text style={styles.detailsLabel}>Area surface</Text>
          <Text style={styles.detailsValue}>{property.area} m²</Text>
        </View>

        <View style={styles.detailsRow}>
          <FontAwesome5 name="building" size={14} color="#555" />
          <Text style={styles.detailsLabel}>Property type</Text>
          <Text style={styles.detailsValue}>{property.property_type}</Text>
        </View>

        <View style={styles.detailsRow}>
          <FontAwesome5 name="bed" size={14} color="#555" />
          <Text style={styles.detailsLabel}>Rooms</Text>
          <Text style={styles.detailsValue}>{property.rooms}</Text>
        </View>

        <View style={styles.detailsRow}>
          <Feather name="phone" size={14} color="#555" />
          <Text style={styles.detailsLabel}>Phone</Text>
          <Text style={styles.detailsValue}>0214345646</Text>
        </View>

        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{property.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 2,
    margin: 12,
    paddingBottom: 12,
  },
  sectionTitle: {
    padding: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  image: {
    height: 180,
    width: '100%',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  location: {
    marginLeft: 4,
    color: '#666',
    fontSize: 13,
  },
  price: {
    color: '#28A745',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 6,
  },
  mapSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
  },
  mapLabel: {
    fontWeight: '600',
    fontSize: 14,
  },
  openMap: {
    color: '#007BFF',
    fontSize: 13,
  },
  mapImage: {
    height: 150,
    width: '100%',
    borderRadius: 8,
    marginBottom: 8,
  },
  detailsTitle: {
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailsLabel: {
    marginLeft: 6,
    fontSize: 13,
    color: '#555',
    flex: 1,
  },
  detailsValue: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  descriptionTitle: {
    fontWeight: '600',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#444',
  },
});

export default PropertyDetailsCard;
