import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Ionicons } from '@expo/vector-icons';

type IconName = keyof typeof Ionicons.glyphMap;

export default function DiscoverMore() {
  const options: Array<{ id: number; title: string; icon: IconName }> = [
    { id: 1, title: 'Refer & Earn', icon: 'gift-outline' },
    { id: 2, title: 'PNR Status', icon: 'document-text-outline' },
    { id: 3, title: 'Flight Status', icon: 'airplane-outline' },
  ];

  return (
    <View style={styles.container}>
      <ThemedText style={styles.heading}>Discover more than travel</ThemedText>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity key={option.id} style={styles.optionItem}>
            <Ionicons name={option.icon} size={32} color="#0089FF" />
            <ThemedText style={styles.optionText}>{option.title}</ThemedText>
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
  optionsContainer: {
    backgroundColor:'#fff',
    borderRadius:15,
    padding: 16,
    height:100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionItem: {
    alignItems: 'center',
    width: '30%',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
}); 