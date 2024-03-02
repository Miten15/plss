import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Layout = () => {
  return  (
     <Tabs>
        <Tabs.Screen 
          name='pls' 
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name='home' size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen name="menu" options={{ href: null }} />
        <Tabs.Screen name='events' options={{
            title: 'Events',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name='home' size={size} color={color} />
            )
          }}/>
        <Tabs.Screen name='discover' 
        options={{
            title: 'Explore',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name='magnify' size={size} color={color} />
            )
          }}/>
        <Tabs.Screen name='fav' options={{
            title: 'Fav',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name='heart' size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen name='community' 
        options={{
            title: 'Community',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name='chat' size={size} color={color} />
            )
          }}/>
           
     </Tabs>
  )
}

export default Layout
