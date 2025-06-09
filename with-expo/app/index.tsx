import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
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
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText} testID="loading-text">
          Loading fonts...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>BIG TEXT</Text>
      <Text style={styles.redText}>RED TEXT</Text>
      <Text style={styles.italicText}>ITALIC TEXT</Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Regular</Text>
      <Text style={styles.interRegular}>Inter Regular</Text>
      <Text style={styles.interBold}>Inter Bold</Text>
      <Text style={styles.poppinsRegular}>Poppins Regular</Text>
      <Text style={styles.poppinsBold}>Poppins Bold</Text>
      <Text style={styles.ralewayRegular}>Raleway Regular</Text>
      <Text style={styles.ralewayBold}>Raleway Bold</Text>
      <Link href="/(tabs)">Go to tabs</Link>
      <Link href={'/any' as any}>Go to Not Found Screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    fontSize: 20,
    color: 'blue',
  },
  bigText: {
    fontSize: 30,
    marginBottom: 20,
  },
  redText: {
    color: 'red',
    fontSize: 20,
    marginBottom: 20,
  },
  italicText: {
    fontStyle: 'italic',
    fontSize: 20,
    marginBottom: 20,
  },
  interRegular: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: '#2563eb', // blue-600
  },
  interBold: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    marginBottom: 20,
    color: '#2563eb', // blue-600
  },
  poppinsRegular: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#7c3aed', // violet-600
  },
  poppinsBold: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    marginBottom: 20,
    color: '#7c3aed', // violet-600
  },
  ralewayRegular: {
    fontFamily: 'Raleway_400Regular',
    fontSize: 20,
    color: '#059669', // emerald-600
  },
  ralewayBold: {
    fontFamily: 'Raleway_700Bold',
    fontSize: 20,
    marginBottom: 20,
    color: '#059669', // emerald-600
  },
});
