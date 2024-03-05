import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'; // Import useRouter
import topTrendy from '@/assets/data/list';
import { defaultImage } from '@/components/TempleList1';
import { places } from '@/components/packagesData';

const ItemListing = () => {
  const { id } = useLocalSearchParams();
  const listing = topTrendy.find((l) => l.id.toString() === id);
  const router = useRouter(); // Use useRouter hook here

  const openBooking = () => {
    router.push('/PackageScreen'); // Use useRouter for navigation
  };

  if (!listing) {
    return <Text style={styles.errorText}>Listing not found</Text>;
  }

  return (
    <View style={styles.container}>
       <Image source={{ uri: listing.image || defaultImage }} style={styles.image} />
      
        <Stack.Screen options={{ title: listing.name }} />
       
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.name}</Text>
          <Text style={styles.text}>Rating: {listing.rating}</Text>
          <Text style={styles.text}>Location: {listing.location}</Text>
          <Text style={styles.text}>Description: {listing.description}</Text>
          <TouchableOpacity style={styles.button} onPress={openBooking}>
        <View  />
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 'auto',
    height: 350,
    marginBottom: 20,
  },
  detailsContainer: {
    width: '80%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#69b6e0',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default ItemListing;
