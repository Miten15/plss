import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PackageScreenProps {
  route: {
    params: {
      packageData: any[]; // Change the type if needed
    };
  };
}

const PackageScreen: React.FC<PackageScreenProps> = ({ route }) => {
  const { packageData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Packages</Text>
      {packageData.map((packageItem: any) => ( // Change the type if needed
        <View key={packageItem.id} style={styles.packageContainer}>
          <Text style={styles.packageTitle}>{packageItem.name}</Text>
          <Text style={styles.packageDescription}>{packageItem.description}</Text>
          {/* Add any other package details here */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});

export default PackageScreen;
