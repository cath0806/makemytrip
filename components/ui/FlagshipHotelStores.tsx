import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from '../ThemedText';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 48 = padding (16) * 2 + gap (16)

const hotels = [
  {
    id: 1,
    name: 'Tamara Hotels',
    image: require('@/assets/images/tamara.jpg'),
    logo: require('@/assets/images/tamara-logo.png'),
  },
  {
    id: 2,
    name: 'CGH Earth Experience Hotels',
    image: require('@/assets/images/tamara.jpg'),
    logo: require('@/assets/images/tamara-logo.png'),
  },
  {
    id: 3,
    name: 'Palazzo Versace Hotel',
    image: require('@/assets/images/tamara.jpg'),
    logo: require('@/assets/images/tamara-logo.png'),
  },
  {
    id: 4,
    name: 'IHG Hotels & Resorts',
    image: require('@/assets/images/tamara.jpg'),
    logo: require('@/assets/images/tamara-logo.png'),
  },
];

export default function FlagshipHotelStores() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.heading}>Flagship Hotel Stores</ThemedText>
      <View style={styles.gridContainer}>
        {hotels.map((hotel) => (
          <TouchableOpacity key={hotel.id} style={styles.hotelCard}>
            <Image source={hotel.image} style={styles.hotelImage} resizeMode="cover" />
            <Image source={hotel.logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.textOverlay}>
              <ThemedText style={styles.hotelName}>{hotel.name}</ThemedText>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    // borderRadius: 15,
     //margin:10,
     //marginLeft:10,
    padding: 16,
    marginBottom: 16,
    marginTop:-8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  hotelCard: {
    width: cardWidth,
    height: 120,
    marginBottom: 15,
    
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  hotelImage: {
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 4,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  hotelName: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
}); 