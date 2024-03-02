import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import TempleList1 from '@/components/TempleList1';
import topTrendy from '@/assets/data/list';

const { width } = Dimensions.get('window');

const Page = () => {
  return (
    <FlatList
      data={topTrendy}
      renderItem={({ item }) => <TempleList1 topTrendy={item} />}
      keyExtractor={(item, index) => index.toString()}
     // horizontal // Set the FlatList to scroll horizontally
     numColumns={2}
     //contentContainerStyle={{gap: 10}}
     //columnWrapperStyle={{gap: 10}}
    />
  );
  }

export default Page;
