import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { ThemedText } from '../ThemedText';

const { width } = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default function AdventureSection() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <ThemedText style={styles.text}>Where can your next adventure</ThemedText>
          <ThemedText style={styles.highlightText}>take you?</ThemedText>
        </View>
        <Image
          source={require('@/assets/images/adventure.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
  },
  contentContainer: {
    marginBottom:50,
    flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems:'flex-start',
  },
  textContainer: {
    width: '60%',
  },
  text: {
    fontSize: 15,
    color: '#444',
    marginBottom: 4,
  },
  highlightText: {
    paddingTop: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006400',
  },
  image: {
    width: width * 0.3,
    height: width * 0.4,
    borderRadius: 8,
  },
}); 