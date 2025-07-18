import { Stack } from "expo-router";

export default function LoginLayout() {
  return <Stack>
    <Stack.Screen name="map_screen" 
          options={{ headerShown: false }} />
              <Stack.Screen name="property_detailss" 
          options={{ headerShown: false }} />
        </Stack>
}