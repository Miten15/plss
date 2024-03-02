import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

const Page = () => {
  const router = useRouter();

  const handleButtonPress = () => {
    router.push('/otp');
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/wellbg.png')} style={styles.backgroundImage} />
      <Image source={require('@/assets/images/welcome.png')} style={styles.welcome} />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <View style={styles.overlay} />
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  welcome: {
    position: 'absolute',
    top: 60,
    width: '100%',
    height: 300,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 50,
    overflow: 'hidden',
    top: 333,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});

export default Page;
