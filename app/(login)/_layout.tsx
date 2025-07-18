import { Stack } from "expo-router";

export default function LoginLayout() {
  return <Stack>
    <Stack.Screen name="login" 
          options={{ headerShown: false }} />
    <Stack.Screen name="signup1"
      options={{ headerShown: false }} />
    <Stack.Screen name="signup2"
      options={{ headerShown: false }} />
    <Stack.Screen name="signup3"
      options={{ headerShown: false }} />
          <Stack.Screen name="forgot_password"
      options={{ headerShown: false }} />
  </Stack>;
}