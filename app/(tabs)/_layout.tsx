import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { Text } from 'react-native';

export default function RootLayout() {
  const baseSize = 24;
  const baseFontSize = 14;
  const color= "#18A189"
  const baseColor= "#919295"

  return (
    <Tabs
>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ?"home":"home-outline"}
              color={focused? color: baseColor}
              size={focused ? baseSize + 2 : baseSize}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{
              color,
              fontSize: focused ? baseFontSize + 2 : baseFontSize,
              fontWeight: "600",
            }}>
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ?"compass":"compass-outline"}
              color={focused? color: baseColor}
              size={focused ? baseSize + 2 : baseSize}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{
              color,
              fontSize: focused ? baseFontSize + 2 : baseFontSize,
              fontWeight: "600",
            }}>
              Explore
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="properties"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ?"document-text":"document-text-outline"}
              color={focused? color: baseColor}
              size={focused ? baseSize + 4 : baseSize}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{
              color,
              fontSize: focused ? baseFontSize + 2 : baseFontSize,
              fontWeight: "600",
            }}>
              Properties
            </Text>
          ),
        }}
      /><Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ?"person":"person-outline"}
              color={focused? color: baseColor}
              size={focused ? baseSize + 4 : baseSize}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{
              color,
              fontSize: focused ? baseFontSize + 2 : baseFontSize,
              fontWeight: "600",
            }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}