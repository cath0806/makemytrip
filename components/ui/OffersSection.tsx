import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const categories = [
  { id: 1, title: 'Trending' },
  { id: 2, title: 'Flights' },
  { id: 3, title: 'Hotels' },
  { id: 4, title: 'Rails' },
  { id: 5, title: 'Holidays' },
  { id: 6, title: 'Cabs' },
  { id: 7, title: 'Bus' },
];

const offerCards = [
  {
    id: 1,
    title: 'Going live on 7th April: Wow Deals on Bank Cards',
    image: require('@/assets/images/offer1.jpg'),
  },
  {
    id: 2,
    title: 'Up to 25% off on International Flights',
    image: require('@/assets/images/offer1.jpg'),
  },
  {
    id: 3,
    title: 'Book Hotels & Get 15% Instant Discount',
    image: require('@/assets/images/offer1.jpg'),
  },
  {
    id: 4,
    title: 'Special Weekend Getaway Deals',
    image: require('@/assets/images/offer1.jpg'),
  },
];

export default function OffersSection() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ThemedText style={styles.headerText}>Offers</ThemedText>
        <TouchableOpacity style={styles.viewAllButton}>
          <ThemedText style={styles.viewAllText}>View All</ThemedText>
          <Ionicons name="chevron-forward" size={16} color="#0089FF" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScrollView}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <ThemedText
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.selectedCategoryText,
              ]}
            >
              {category.title}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.offersScrollView}
      >
        {offerCards.map((offer) => (
          <TouchableOpacity key={offer.id} style={styles.offerCard}>
            <Image source={offer.image} style={styles.offerImage} resizeMode="cover" />
            <View style={styles.offerTextOverlay}>
              <ThemedText style={styles.offerText}>{offer.title}</ThemedText>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#0089FF',
    marginRight: 4,
  },
  categoryScrollView: {
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  selectedCategory: {
    backgroundColor: '#0089FF',
  },
  categoryText: {
    color: '#666',
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  offersScrollView: {
    marginBottom: 8,
  },
  offerCard: {
    width: width * 0.7,
    height: 150,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  offerImage: {
    width: '100%',
    height: '100%',
  },
  offerTextOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    //backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 12,
  },
  offerText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
}); 