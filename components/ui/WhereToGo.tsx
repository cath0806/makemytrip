import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 48 = padding (16) * 2 + gap (16)

type IconName = keyof typeof Ionicons.glyphMap;

export default function WhereToGo() {
  const stories = [
    {
      id: 1,
      location: 'Bali, Indonesia',
      image: require('@/assets/images/place.jpg'),
      icon: 'location-outline' as IconName,
      description: 'Discover the perfect blend of culture and beaches',
    },
    {
      id: 2,
      location: 'Paris, France',
      image: require('@/assets/images/place.jpg'),
      icon: 'location-outline' as IconName,
      description: 'Experience the city of love and lights',
    },
    {
      id: 3,
      location: 'Tokyo, Japan',
      image: require('@/assets/images/place.jpg'),
      icon: 'location-outline' as IconName,
      description: 'Explore the future while embracing tradition',
    },
    {
      id: 4,
      location: 'New York, USA',
      image: require('@/assets/images/place.jpg'),
      icon: 'location-outline' as IconName,
      description: 'Feel the energy of the city that never sleeps',
    },
    {
      id: 5,
      location: 'Dubai, UAE',
      image: require('@/assets/images/place.jpg'),
      icon: 'location-outline' as IconName,
      description: 'Experience luxury in the desert',
    },
    {
      id: 6,
      location: 'London, UK',
      image: require('@/assets/images/place.jpg'),
      icon: 'location-outline' as IconName,
      description: 'Explore history and culture',
    },
  ];

  const renderItem = ({ item }: { item: typeof stories[0] }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <View style={styles.locationContainer}>
          <Ionicons name={item.icon} size={20} color="#fff" />
          <ThemedText style={styles.location}>{item.location}</ThemedText>
        </View>
        <ThemedText style={styles.description}>{item.description}</ThemedText>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => (
    <View style={styles.seeAllContainer}>
      <TouchableOpacity style={styles.seeAllButton}>
        <ThemedText style={styles.seeAllText}>See All Inspiring Stories {'>'}</ThemedText>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.heading}>Where 2 Go</ThemedText>
        <TouchableOpacity>
          <ThemedText style={styles.viewAll}>View All {'>'}</ThemedText>
        </TouchableOpacity>
      </View>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#0089FF',
    fontWeight: '500',
  },
  listContent: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  description: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
  },
  seeAllContainer: {
    marginTop: 16,
    backgroundColor: '#2c67f2',
    borderRadius: 8,
    overflow: 'hidden',
  },
  seeAllButton: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
}); 