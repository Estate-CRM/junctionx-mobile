import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

const [fontsLoaded] = useFonts({
  'Poppins-100': require('../assets/fonts/Poppins-Thin.ttf'),
  'Poppins-200': require('../assets/fonts/Poppins-ExtraLight.ttf'),
  'Poppins-300': require('../assets/fonts/Poppins-Light.ttf'),
  'Poppins-400': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-500': require('../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-600': require('../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-700': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-800': require('../assets/fonts/Poppins-ExtraBold.ttf'),
  'Poppins-900': require('../assets/fonts/Poppins-Black.ttf'),
});

  return (
    <Stack>
      <Stack.Screen name="index"
        options={{ headerShown: false }} />
        <Stack.Screen
        name="(misc)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(login)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
