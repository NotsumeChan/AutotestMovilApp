import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import styles from '@/components/styles';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    
    screenOptions={{
      tabBarStyle:{backgroundColor : Colors.light, borderTopColor: Colors.light},
      tabBarActiveTintColor: Colors.beach,
      headerShown: false,
    }}>   
    
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} style={focused ? styles.BottomNavBarIcons : {}}/>
          ),
          title: ""
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} style={focused ? styles.BottomNavBarIcons : {}} />
          ),
          title: ""
        }}
      />
      <Tabs.Screen
        name="teacher"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} style={focused ? styles.BottomNavBarIcons : {}}/>
          ),
          title: ""
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} style={focused ? styles.BottomNavBarIcons : {}}/>
          ),
          title: ""
        }}
      />
    </Tabs>
  );
}
