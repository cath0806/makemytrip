import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from '../ThemedText';

const { width } = Dimensions.get('window');

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
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '40%',
  },
  text: {
    fontSize: 18,
    color: '#444',
    marginBottom: 4,
  },
  highlightText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#659c6f',
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 8,
  },
}); 