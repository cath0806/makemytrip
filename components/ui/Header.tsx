import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../ThemedText';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <Image
          source={require('@/assets/images/mmt-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.myCashButton}>
          <ThemedText style={styles.myCashText}>myCash</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myBizButton}>
          <ThemedText style={styles.myBizText}>myBiz</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 12,
  },
  logo: {
    width: 120,
    height: 30,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    marginRight: 16,
  },
  myCashButton: {
    //backgroundColor: '#f0f8ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  myCashText: {
    color: '#000',
    fontWeight: 'bold',
  },
  myBizButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  myBizText: {
    color: '#000',
    fontWeight: 'bold',
  },
}); 