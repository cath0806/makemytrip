import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Ionicons } from '@expo/vector-icons';

const initialServices = [
  { id: 1, title: 'Airport Cabs', icon: 'car' },
  { id: 2, title: 'Homestays and Villas', icon: 'home' },
  { id: 3, title: 'Outstation Cabs', icon: 'car-sport' },
  { id: 4, title: 'Forex Card & Currency', icon: 'card' },
  { id: 5, title: 'Gift Cards', icon: 'gift' },
  { id: 6, title: 'Hourly Stays', icon: 'time' },
  { id: 7, title: 'Visa', icon: 'document-text' },
  { id: 8, title: 'Travel Insurance', icon: 'shield-checkmark' },
];

const expandedServices = [
  { id: 9, title: 'Nearby Staycations', icon: 'location' },
  { id: 10, title: 'Tours & Attractions', icon: 'compass' },
  { id: 11, title: 'Flight Status', icon: 'airplane' },
  { id: 12, title: 'PNR Status', icon: 'document' },
];

export default function ExpandableServices() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const maxHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 120],
  });

  return (
    <View style={styles.container}>
      <View style={styles.servicesGrid}>
        {initialServices.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceButton}>
            <View style={styles.iconContainer}>
              <Ionicons name={service.icon} size={24} color="#0089FF" />
            </View>
            <ThemedText style={styles.title}>{service.title}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <Animated.View style={[styles.expandedServices, { maxHeight }]}>
        <View style={styles.servicesGrid}>
          {expandedServices.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceButton}>
              <View style={styles.iconContainer}>
                <Ionicons name={service.icon} size={24} color="#0089FF" />
              </View>
              <ThemedText style={styles.title}>{service.title}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      <TouchableOpacity style={styles.expandButton} onPress={toggleExpand}>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#0089FF"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceButton: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
  },
  expandedServices: {
    overflow: 'hidden',
  },
  expandButton: {
    alignItems: 'center',
    padding: 8,
  },
}); 