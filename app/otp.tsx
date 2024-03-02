import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaskInput from 'react-native-mask-input';
import Colors from '@/constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
  const { bottom } = useSafeAreaInsets();

  const sendOTP = async () => {
    // Your logic for sending OTP
    // For demonstration purposes, let's navigate to another screen
    router.push('/otp');
  }

  const trySignIn = async () => {};
  
  const openLink = () => {
    Linking.openURL('https://galaxies.dev');
  };

  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      <LinearGradient colors={['#3461A8', '#000']} style={styles.gradient}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={[styles.container, { marginBottom: bottom }]}>
            <Text style={styles.description}> We will need to verify your account. Carrier charges may apply</Text>

            <View style={styles.list}>
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>India</Text>
                <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
              </View>
              <View style={styles.separator} />

              <MaskInput
                value={phoneNumber}
                style={styles.input}
                onChangeText={(masked, unmasked) => setPhoneNumber(masked)}
                mask={[
                  '+',
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                placeholderTextColor={Colors.gray}
              />
            </View>

            <Text style={styles.legal}>
              You must be{' '}
              <Text style={styles.link} onPress={openLink}>
                at least 16 years old
              </Text>{' '}
              to register. Learn how WhatsApp works with the{' '}
              <Text style={styles.link} onPress={openLink}>
                Meta Companies
              </Text>
              .
            </Text>
            
            <TouchableOpacity
              style={[styles.button, phoneNumber !== '' ? styles.enabled : null]}
              onPress={sendOTP}
              disabled={phoneNumber === ''}
              accessibilityLabel="Next"
            >
              <View style={styles.overlay} />
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  legal: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  link: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    color: Colors.black,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  list: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  listItemText: {
    fontSize: 16,
    color: Colors.black,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray,
    opacity: 0.2,
  },
  enabled: {
    backgroundColor: Colors.primary,
    color: '#fff',
  },
});

export default Page;
