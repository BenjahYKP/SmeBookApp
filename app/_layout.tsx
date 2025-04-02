import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import BottomTabBar from './components/bottombar';
import { usePathname } from 'expo-router';

const RootLayout = () => {
  const pathname = usePathname();

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#ffffff" }
        }}
      />
      
      {pathname !== '/' && <BottomTabBar />}
    </View>
  );
};

export default RootLayout;