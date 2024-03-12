import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // Import useLocalSearchParams
import { packagesData } from '@/components/packagesData';
import BookingProvider, { BookingContext } from '@/providers/BookingProvider';
import { useContext } from 'react';


const PackageScreen = () => {
  const {} = useContext(BookingContext)
}
const PackageListing = () => {
  // Retrieve the id parameter from local search params
  const { id } = useLocalSearchParams();

  // Filter packages based on the selected ID
 // const packageItem = packagesData.find((pkg) => pkg.id.toString() === id);

  // Render component
  return (
  <ScrollView>
    <Text>Hmmmm</Text>
  </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  packageContainer: {
    marginBottom: 20,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  packageDescription: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default PackageListing;
