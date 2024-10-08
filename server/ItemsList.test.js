import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemsList from '../public/react/components/ItemsList';

// Sample mock data
const mockItems = [
  { id: 1, name: 'Item 1', image: 'image1.jpg' },
  { id: 2, name: 'Item 2', image: 'image2.jpg' },
];

describe('ItemsList Component', () => {
  test('renders the correct number of items', () => {
    render(<ItemsList items={mockItems} />);

    // Check if the correct number of items is displayed
    const itemElements = screen.getAllByRole('heading', { level: 3 });
    expect(itemElements.length).toBe(mockItems.length);
  });

  test('displays the correct item names and images', () => {
    render(<ItemsList items={mockItems} />);

    // Check if item names are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();

    // Check if images are rendered with the correct alt text
    expect(screen.getByAltText('Item 1')).toHaveAttribute('src', 'image1.jpg');
    expect(screen.getByAltText('Item 2')).toHaveAttribute('src', 'image2.jpg');
  });

  test('renders an empty state if no items are provided', () => {
    render(<ItemsList items={[]} />);

    expect(screen.getByText('No items available')).toBeInTheDocument();
  });
});
