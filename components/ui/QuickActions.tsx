import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '../ThemedText';

const actions = [
  { id: 1, title: 'Flights', icon: '✈️' },
  { id: 2, title: 'Hotels', icon: '🏨' },
  { id: 3, title: 'Trains', icon: '🚂' },
  { id: 4, title: 'Buses', icon: '🚌' },
  { id: 5, title: 'Cabs', icon: '🚕' },
  { id: 6, title: 'Activities', icon: '🎯' },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <TouchableOpacity key={action.id} style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <ThemedText style={styles.icon}>{action.icon}</ThemedText>
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
  },
  actionButton: {
    width: '30%',
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
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 12,
    color: '#333',
  },
}); 