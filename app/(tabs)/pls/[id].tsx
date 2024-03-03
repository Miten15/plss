import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import topTrendy from '@/assets/data/list'
import { defaultImage } from '@/components/TempleList1'

const ItemListing = () => {
  const { id } = useLocalSearchParams()
  const listing = topTrendy.find((l) => l.id.toString() === id)
  
  if (!listing) {
    return <Text style={styles.errorText}>Listing not found</Text>
  }
  
  return (
   
      <View style={styles.image}>
      <Stack.Screen options={{ title: listing.name }} />
      <Image
  source={{ uri: listing.image || defaultImage }}
  style={styles.image}
  onError={() => console.log('Error loading image')} // Handle error
/>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.name}</Text>
        <Text style={styles.text}>Rating: {listing.rating}</Text>
        <Text style={styles.text}>Location: {listing.location}</Text>
        <Text style={styles.text}>Description: {listing.description}</Text>
        <Text style={styles.text}>Key Details: {listing.keyDetails}</Text>
        <Text style={styles.text}>Services Details: {listing.servicesDetails}</Text>
        <Text style={styles.text}>Visiting Details: {listing.visitingDetails}</Text>
      </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
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
})

export default ItemListing
