import { Stack } from "expo-router";

export default function LoginLayout() {
  return <Stack>
    <Stack.Screen name="map_screen" 
          options={{ headerShown: false }} />
              <Stack.Screen name="property_details" 
          options={{ headerShown: false }} />
              <Stack.Screen name="add_preferences" 
          options={{ headerShown: false }} />
          
              <Stack.Screen name="client_map" 
          options={{ headerShown: false }} />
        </Stack>
}