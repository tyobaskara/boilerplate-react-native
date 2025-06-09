import { render, screen } from '@testing-library/react-native';
import Index from '../index';

describe('Index Component', () => {
  it('should render the container', () => {
    render(<Index />);
    expect(screen.getByTestId('container')).toBeDefined();
  });

  it('should render all text elements', () => {
    render(<Index />);
    expect(screen.getByText('BIG TEXT')).toBeDefined();
    expect(screen.getByText('RED TEXT')).toBeDefined();
    expect(screen.getByText('ITALIC TEXT')).toBeDefined();
    expect(screen.getByText('Regular')).toBeDefined();
    expect(screen.getByText('Inter Regular')).toBeDefined();
    expect(screen.getByText('Inter Bold')).toBeDefined();
    expect(screen.getByText('Poppins Regular')).toBeDefined();
    expect(screen.getByText('Poppins Bold')).toBeDefined();
    expect(screen.getByText('Raleway Regular')).toBeDefined();
    expect(screen.getByText('Raleway Bold')).toBeDefined();
  });

  it('should render navigation links with correct testIDs', () => {
    render(<Index />);
    expect(screen.getByTestId('tabs-link')).toBeDefined();
    expect(screen.getByTestId('not-found-link')).toBeDefined();
  });
});
