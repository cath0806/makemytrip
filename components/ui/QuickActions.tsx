import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Ionicons } from '@expo/vector-icons';

type IconName = keyof typeof Ionicons.glyphMap;

const mainActions = [
  { id: 1, title: 'Flights', icon: 'airplane' as IconName },
  { id: 2, title: 'Hotels', icon: 'bed' as IconName },
  { id: 3, title: 'Holiday Packages', icon: 'briefcase' as IconName },
  { id: 4, title: 'Trains/Bus', icon: 'train' as IconName },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      {mainActions.map((action) => (
        <TouchableOpacity key={action.id} style={styles.actionContainer}>
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
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    marginBottom: 16,
    // borderRadius: 15,
    // margin: 15,
     marginTop: -15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  actionContainer: {
    width: '24%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.05,
    // shadowRadius: 2,
    // elevation: 1,
  },
  iconContainer: {
    width: 50,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 13,
    fontWeight:'bold',
    color: '#333',
    textAlign: 'center',
  },
}); 