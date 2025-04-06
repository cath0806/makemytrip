import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';

export default function ExclusivePartners() {
  const partners = [
    { id: 1, name: 'Partner 1', image: require('@/assets/images/banner.jpg') },
    { id: 2, name: 'Partner 2', image: require('@/assets/images/banner.jpg') },
  ];

  return (
    <View style={styles.container}>
      <ThemedText style={styles.heading}>Exclusive Partners</ThemedText>
      <View style={styles.partnersContainer}>
        {partners.map((partner) => (
          <TouchableOpacity key={partner.id} style={styles.partnerItem}>
            <Image source={partner.image} style={styles.partnerImage} resizeMode="cover" />
            <View style={styles.sponsoredTag}>
              <ThemedText style={styles.sponsoredText}>Sponsored</ThemedText>
            </View>
            {/* <View style={styles.textOverlay}>
              <ThemedText style={styles.partnerText}>{partner.name}</ThemedText>
            </View> */}
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
    // margin:15,
    // marginTop:-8,
    padding: 16,
    marginBottom: 16,
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
    marginBottom: 16,
  },
  partnersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  partnerItem: {
    width: '48%',
    height: 120,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  partnerImage: {
    width: '100%',
    height: '100%',
  },
  sponsoredTag: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 255)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  sponsoredText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  partnerText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 