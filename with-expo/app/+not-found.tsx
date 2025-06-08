import { Stack, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function NotFoundScreen() {
  const router = useRouter();

  const handleGoHome = () => {
    try {
      router.replace('/');
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to basic navigation if replace fails
      router.push('/');
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen does not exist.</Text>
        <Pressable onPress={handleGoHome} style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 16,
    color: '#2e78b7',
  },
});
