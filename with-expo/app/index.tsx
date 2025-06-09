import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { styles } from './index.styles';

export default function Index() {
  return (
    <View style={styles.container} testID="container">
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
      <Link href="/(tabs)" testID="tabs-link">
        Go to tabs
      </Link>
      <Link href={'/any' as any} testID="not-found-link">
        Go to Not Found Screen
      </Link>
    </View>
  );
}
