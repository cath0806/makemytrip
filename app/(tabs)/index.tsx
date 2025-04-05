import { StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/ui/Header';
import ReferralBanner from '@/components/ui/ReferralBanner';
import QuickActions from '@/components/ui/QuickActions';
import ExpandableServices from '@/components/ui/ExpandableServices';
import OffersSection from '@/components/ui/OffersSection';
import FlagshipAirlineStore from '@/components/ui/FlagshipAirlineStore';
import FlagshipHotelStores from '@/components/ui/FlagshipHotelStores';
import DiscoverMore from '@/components/ui/DiscoverMore';
import ExclusivePartners from '@/components/ui/ExclusivePartners';
import WhereToGo from '@/components/ui/WhereToGo';
import AdventureSection from '@/components/ui/AdventureSection';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <ReferralBanner />
        <QuickActions />
        <ExpandableServices />
        <OffersSection />
        <FlagshipAirlineStore />
        <FlagshipHotelStores />
        <DiscoverMore/>
        <ExclusivePartners/>
        <WhereToGo />
        <AdventureSection />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
});
