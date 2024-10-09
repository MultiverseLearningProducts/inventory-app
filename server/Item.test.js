import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Items from '../public/react/components/Items';

// Mock data for an individual item
const mockItem = { name: 'Item 1', image: 'image1.jpg' };

describe('Items Component', () => {
  test('renders item details correctly', () => {
    render(<Items items={mockItem} />);

    // Check if the item name is displayed
    expect(screen.getByText('Item 1')).toBeInTheDocument();

    // Check if the image is displayed with the correct alt text
    expect(screen.getByAltText('Item 1')).toHaveAttribute('src', 'image1.jpg');
  });
});