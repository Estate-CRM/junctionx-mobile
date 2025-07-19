import usePropertyFormStore from "@/stores/forms/property_form";
import React, { useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import MapView, { Marker, MapPressEvent, Region } from "react-native-maps";

interface Location {
  latitude: number;
  longitude: number;
  title?: string;
}

interface Props {
  containerStyle?: ViewStyle;
  locations?: Location[];
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

export const InteractiveMap: React.FC<Props> = ({
  containerStyle = {},
  locations = [],
}) => {
  const latitude= usePropertyFormStore((state)=>state.fields["latitude"])
  const longtitude= usePropertyFormStore((state)=>state.fields["longtitude"])
  const setLa= usePropertyFormStore((state)=>state.setField("latitude", latitude))
  const setLo= usePropertyFormStore((state)=>state.setField("longtitude",longtitude))
  const [markerPosition, setMarkerPosition] = useState<Coordinate | null>(null);

  const handlePress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
  };

  const initialRegion: Region = {
    latitude: 36.75,
    longitude: 3.06,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={ containerStyle}>
      <MapView style={styles.map} onPress={handlePress} initialRegion={initialRegion}>
        {markerPosition && <Marker coordinate={markerPosition} />}

        {locations.map((loc, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: loc.latitude,
              longitude: loc.longitude,
            }}
            title={loc.title || `Location ${index + 1}`}
          />
        ))}
      </MapView>

      {markerPosition && (
        <View style={styles.coords}>
          <Text>Lat: {markerPosition.latitude.toFixed(6)}</Text>
          <Text>Lng: {markerPosition.longitude.toFixed(6)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1 },
  coords: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 4,
  },
});

