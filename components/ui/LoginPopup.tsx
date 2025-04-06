import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  Image, 
  Modal, 
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../ThemedText';

const { width, height } = Dimensions.get('window');

type CountryCode = {
  code: string;
  flag: string;
  dialCode: string;
};

const countryCodes: CountryCode[] = [
  { code: 'IN', flag: '🇮🇳', dialCode: '+91' },
  { code: 'US', flag: '🇺🇸', dialCode: '+1' },
  { code: 'GB', flag: '🇬🇧', dialCode: '+44' },
  { code: 'AU', flag: '🇦🇺', dialCode: '+61' },
  { code: 'CA', flag: '🇨🇦', dialCode: '+1' },
  { code: 'SG', flag: '🇸🇬', dialCode: '+65' },
];

interface LoginPopupProps {
  visible: boolean;
  onClose: () => void;
}

export default function LoginPopup({ visible, onClose }: LoginPopupProps) {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleTabChange = (tab: 'personal' | 'business') => {
    setActiveTab(tab);
  };

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setShowCountryPicker(false);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <ThemedText style={styles.title}>Login for the Best Travel Offers</ThemedText>
            <View style={styles.placeholder} />
          </View>

          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'personal' && styles.activeTab]} 
              onPress={() => handleTabChange('personal')}
            >
              <ThemedText style={[styles.tabText, activeTab === 'personal' && styles.activeTabText]}>
                You're in Personal
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'business' && styles.activeTab]} 
              onPress={() => handleTabChange('business')}
            >
              <ThemedText style={[styles.tabText, activeTab === 'business' && styles.activeTabText]}>
                Go to MyBiz
              </ThemedText>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity 
              style={styles.countryPicker} 
              onPress={() => setShowCountryPicker(!showCountryPicker)}
            >
              <Text style={styles.flagText}>{selectedCountry.flag}</Text>
              <Text style={styles.dialCodeText}>{selectedCountry.dialCode}</Text>
              <Ionicons name="chevron-down" size={16} color="#333" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Email or Mobile Number"
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType="email-address"
            />
          </View>

          {showCountryPicker && (
            <View style={styles.countryList}>
              <ScrollView>
                {countryCodes.map((country) => (
                  <TouchableOpacity 
                    key={country.code} 
                    style={styles.countryItem}
                    onPress={() => handleCountrySelect(country)}
                  >
                    <Text style={styles.flagText}>{country.flag}</Text>
                    <Text style={styles.countryName}>{country.code}</Text>
                    <Text style={styles.dialCodeText}>{country.dialCode}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          <TouchableOpacity style={styles.confirmButton}>
            <ThemedText style={styles.confirmButtonText}>Confirm</ThemedText>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <ThemedText style={styles.dividerText}>or</ThemedText>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('@/assets/images/google-logo.png')} 
                style={styles.socialIcon} 
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="mail" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.referralContainer}>
            <ThemedText style={styles.referralText}>
              Have a <ThemedText style={styles.referralHighlight}>Referral Code?</ThemedText>
            </ThemedText>
          </TouchableOpacity>

          <View style={styles.termsContainer}>
            <ThemedText style={styles.termsText}>
              By proceeding, you agree to MakeMyTrip's{' '}
              <ThemedText style={styles.termsLink}>Privacy Policy</ThemedText>,{' '}
              <ThemedText style={styles.termsLink}>User Agreement</ThemedText>,{' '}
              <ThemedText style={styles.termsLink}>T&Cs</ThemedText> as well as Mobile Connect's{' '}
              <ThemedText style={styles.termsLink}>T&Cs</ThemedText>
            </ThemedText>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: height * 0.7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 5,
  },
  title: {
    color:'#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 34,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0089FF',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#0089FF',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginRight: 10,
  },
  flagText: {
    fontSize: 20,
    marginRight: 5,
  },
  dialCodeText: {
    fontSize: 14,
    marginRight: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
  },
  countryList: {
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  countryName: {
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  confirmButton: {
    backgroundColor: '#0089FF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#666',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  referralContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  referralText: {
    color:'#000',
    fontSize: 14,
  },
  referralHighlight: {
    color: '#0089FF',
    fontWeight: 'bold',
  },
  termsContainer: {
    alignItems: 'center',
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  termsLink: {
    fontSize:12,
    color: '#0089FF',
  },
}); 