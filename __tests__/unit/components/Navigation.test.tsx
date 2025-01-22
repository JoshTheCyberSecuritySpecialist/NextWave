import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '@/components/navigation';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
  });

  it('toggles mobile menu', () => {
    render(<Navigation />);
    const menuButton = screen.getByLabelText(/open menu/i);
    
    fireEvent.click(menuButton);
    expect(screen.getByRole('menu')).toBeInTheDocument();
    
    fireEvent.click(menuButton);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('handles keyboard navigation', () => {
    render(<Navigation />);
    const menuButton = screen.getByLabelText(/open menu/i);
    
    fireEvent.keyDown(menuButton, { key: 'Enter' });
    expect(screen.getByRole('menu')).toBeInTheDocument();
    
    fireEvent.keyDown(menuButton, { key: 'Escape' });
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});