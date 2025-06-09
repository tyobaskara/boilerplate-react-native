/* global jest */
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
}));

jest.mock('expo-linking', () => ({
  createURL: jest.fn(),
}));

// Mock Animated module
jest.mock('react-native/Libraries/Animated/Animated', () => ({
  ...jest.requireActual('react-native/Libraries/Animated/Animated'),
  timing: () => ({
    start: jest.fn(),
  }),
  spring: () => ({
    start: jest.fn(),
  }),
  Value: jest.fn(),
  event: jest.fn(),
  add: jest.fn(),
  eq: jest.fn(),
  set: jest.fn(),
  cond: jest.fn(),
  interpolate: jest.fn(),
  View: jest.fn(),
  Text: jest.fn(),
  Image: jest.fn(),
  ScrollView: jest.fn(),
  FlatList: jest.fn(),
}));
