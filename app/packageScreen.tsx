import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const PackageListing = () => {
  // Retrieve the id parameter from local search params
  const { id } = useLocalSearchParams();
  
  // Sample packages data
  const packagesData = [
    {
      id: 1,
      name: 'Package 1',
      description: 'Description of Package 1',
    },
    {
      id: 2,
      name: 'Package 2',
      description: 'Description of Package 2',
    },
    // Add more packages as needed
  ];

  // Filter packages based on the selected ID
  const filteredPackages = packagesData.filter((pkg) => pkg.id.toString() === id);

  // Render component
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Packages</Text>
      {/* Render each package */}
      {filteredPackages.length > 0 ? (
        filteredPackages.map((pkg) => (
          <View key={pkg.id} style={styles.packageContainer}>
            <Text style={styles.packageTitle}>{pkg.name}</Text>
            <Text style={styles.packageDescription}>{pkg.description}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.errorText}>No packages found for the selected ID.</Text>
      )}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
