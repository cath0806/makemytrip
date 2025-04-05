import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';

export default function FlagshipAirlineStore() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.heading}>Flagship Airline Store</ThemedText>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/emirates.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/emirates-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textOverlay}>
          <ThemedText style={styles.text}>Fly Better With Emirates</ThemedText>
        </View>
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
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  imageContainer: {
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
    padding: 4,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 12,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
}); 