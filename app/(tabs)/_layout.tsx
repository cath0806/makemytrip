import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'MyTrips',
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons name="airplane" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="where2go"
        options={{
          title: 'Where2Go',
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons name="globe" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="creditcard"
        options={{
          title: 'Credit Card',
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons name="card" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="beahost"
        options={{
          title: 'Be A Host',
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons name="people" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
