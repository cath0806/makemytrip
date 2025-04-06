import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, StyleSheet, ViewStyle } from 'react-native';
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
        tabBarActiveTintColor: '#0089FF',
        tabBarInactiveTintColor: '#666',
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
          borderTopColor: '#fff',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarItemStyle: {
          position: 'relative',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View>
              {focused && <View style={styles.activeIndicator} />}
              <Ionicons name="home" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mytrips"
        options={{
          title: 'MyTrips',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View>
              {focused && <View style={styles.activeIndicator} />}
              <Ionicons name="airplane" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="where2go"
        options={{
          title: 'Where2Go',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View>
              {focused && <View style={styles.activeIndicator} />}
              <Ionicons name="globe" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="creditcard"
        options={{
          title: 'Credit Card',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View>
              {focused && <View style={styles.activeIndicator} />}
              <Ionicons name="card" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="beahost"
        options={{
          title: 'Be A Host',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View>
              {focused && <View style={styles.activeIndicator} />}
              <Ionicons name="people" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeIndicator: {
    position: 'absolute' as const,
    top: -8,
    left: '50%',
    marginLeft: -15,
    width: 30,
    height: 3,
    backgroundColor: '#0089FF',
    borderRadius: 1.5,
  },
});
