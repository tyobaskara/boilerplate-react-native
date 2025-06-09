import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
