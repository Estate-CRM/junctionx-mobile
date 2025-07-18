import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import usePropertyStore from '@/stores/property_detail';
import { Property } from '@/models/property'; // adjust this import path as needed
import { defaultImage } from '@/constants/texts';

const PropertyItem = ({ property }: { property: Property }) => {
  const setProperty = usePropertyStore((state) => state.setProperty);

  return (
    <View style={styles.card}>
      <Image
        source={property.images.length>0?{ uri: property.images[0]} : defaultImage }
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{property.property_type}</Text>
          <Text style={styles.price}>{property.price} DA</Text>
        </View>

        <View style={styles.locationRow}>
          <Feather name="map-pin" size={16} color="#999" />
          <Text style={styles.location}>
            Lat: {property.latitude.toFixed(2)}, Lng: {property.longitude.toFixed(2)}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <FontAwesome5 name="bed" size={14} color="#555" />
            <Text style={styles.infoText}>{property.rooms} rooms</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="bath" size={14} color="#555" />
            <Text style={styles.infoText}>{Math.max(1, Math.floor(property.rooms / 2))} bathrooms</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather name="maximize" size={14} color="#555" />
            <Text style={styles.infoText}>{property.area} m²</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setProperty(property);
            router.push('/(misc)/property_details');
          }}
        >
          <Text style={styles.buttonText}>More details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PropertyItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 10,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4CAF50',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  location: {
    marginLeft: 6,
    fontSize: 13,
    color: '#777',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 13,
    marginLeft: 4,
  },
  button: {
    marginTop: 12,
    paddingVertical: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});
