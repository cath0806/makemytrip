import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../ThemedText';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={20} color="#333" />
        </TouchableOpacity>
        <Image
          source={require('@/assets/images/mmt-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#333" />
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
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -4,
  },
  menuButton: {
    marginRight: 2,
  },
  logo: {
    marginLeft: -20,
    width: 80,
    height: 20,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    marginRight: 12,
  },
  myCashButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
    marginRight: 6,
  },
  myCashText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
  },
  myBizButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  myBizText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
  },
}); 