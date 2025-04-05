import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../ThemedText';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.input}
          placeholder="Where do you want to go?"
          placeholderTextColor="#666"
        />
      </View>
      <TouchableOpacity style={styles.profileButton}>
        <Ionicons name="person-circle-outline" size={24} color="#0089FF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
    height: 40,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  profileButton: {
    padding: 8,
  },
}); 