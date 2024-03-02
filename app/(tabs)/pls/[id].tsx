import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const itemListing = () => {
 const { id } = useLocalSearchParams()

  return (
    <View>
      <Stack.Screen 
        options={{
            title: 'Deatis:'+ id
            
          }}/>
      <Text>itemListing for id: {id}</Text>
    </View>
  )
}

export default itemListing