import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_700Bold,
    Raleway_400Regular,
    Raleway_700Bold,
  });

  useEffect(() => {
    if (fontError) {
      console.error('Font loading error:', fontError);
    }
  }, [fontError]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
