/* global jest */
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

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

// Mock expo-font
jest.mock('expo-font', () => ({
  useFonts: () => [true, null],
}));

// Mock expo-status-bar
jest.mock('expo-status-bar', () => ({
  StatusBar: 'StatusBar',
}));
