import { render, screen } from '@testing-library/react-native';
import { useFonts } from 'expo-font';
import Index from '../index';

// Mock expo-font
jest.mock('expo-font', () => ({
  useFonts: jest.fn(),
}));

describe('Index Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading state when fonts are not loaded', () => {
    (useFonts as jest.Mock).mockReturnValue([false, null]);

    render(<Index />);
    const loadingText = screen.getByTestId('loading-text');
    expect(loadingText).toBeDefined();
  });

  it('shows error in console when font loading fails', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const mockError = new Error('Font loading failed');

    (useFonts as jest.Mock).mockReturnValue([false, mockError]);

    render(<Index />);

    expect(consoleSpy).toHaveBeenCalledWith('Font loading error:', mockError);
    consoleSpy.mockRestore();
  });
});
