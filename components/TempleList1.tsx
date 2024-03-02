import React from 'react';
import { Dimensions, StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { TopTrendy } from '@/type';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');
export const defaultImage = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg';

type TempleList1Props = {
  topTrendy: TopTrendy;
}

const TempleList1 = ({ topTrendy }: TempleList1Props) => {
  return (
    <Link href={`/pls/${topTrendy.id}`} asChild> 
    <Pressable style={styles.container}>
      <Image 
        source={{ uri: topTrendy.image || defaultImage }} style={styles.image} 
         />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{topTrendy.name}</Text>
      </View>

      
    </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2, // Set the width to half of the screen width
    marginHorizontal: 5, // Add horizontal margin for spacing between items
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      
    },
    //gap: 2,
    marginVertical: 8,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: '50%',
    overflow: 'hidden', // Ensure that content does not overflow outside the container
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    //right: 0, // Stretch the text container to cover the entire width
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 10,
    padding: 5,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
  },
});

export default TempleList1;
