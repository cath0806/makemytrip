import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';

export default function ReferralBanner() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('@/assets/images/referral-icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <ThemedText style={styles.text}>Refer your friends to earn Rs.220</ThemedText>
        <ThemedText style={styles.text}>myCash & coupons worth Rs.5500</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5fbfc',
    margin:15,
    marginBottom: 16,
    borderRadius: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  icon: {
    width: '15%',
    height: 40,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  text: {
    fontSize: 16,
    fontWeight:'500',
    color: '#333',
  },
}); 