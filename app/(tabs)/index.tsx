import { StyleSheet, ScrollView, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import SearchBar from '@/components/ui/SearchBar';
import QuickActions from '@/components/ui/QuickActions';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SearchBar />
      <ScrollView style={styles.scrollView}>
        {/* Banner Section */}
        <ThemedView style={styles.bannerContainer}>
          <Image
            source={require('@/assets/images/banner.jpg')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </ThemedView>

        {/* Quick Actions */}
        <QuickActions />

        {/* Trending Destinations */}
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Trending Destinations</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Add destination cards here */}
          </ScrollView>
        </ThemedView>

        {/* Special Offers */}
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Special Offers</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Add offer cards here */}
          </ScrollView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  bannerContainer: {
    height: 200,
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
