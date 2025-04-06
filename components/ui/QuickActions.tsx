import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Ionicons } from '@expo/vector-icons';

const mainActions = [
  { id: 1, title: 'Flights', icon: 'airplane' },
  { id: 2, title: 'Hotels', icon: 'bed' },
  { id: 3, title: 'Holiday Packages', icon: 'briefcase' },
  { id: 4, title: 'Trains/Bus', icon: 'train' },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      {mainActions.map((action) => (
        <TouchableOpacity key={action.id} style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Ionicons name={action.icon} size={24} color="#0089FF" />
          </View>
          <ThemedText style={styles.title}>{action.title}</ThemedText>
        </TouchableOpacity>
        
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionButton: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
}); 