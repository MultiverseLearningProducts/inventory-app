import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Optional for extended matchers
import AllItemsView from './AllItemsView';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'Item 1', description: 'Description 1', price: 1000, category: 'Category 1', image: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__example.com_item1.jpg&d=DwIFAg&c=udBTRvFvXC5Dhqg7UHpJlPps3mZ3LRxpb6__0PomBTQ&r=WzhRhc5arXykYZFRUvZmSQqMCViZX8viSWuHp8zwVLw&m=WmAkjETPjxMukZFNBhGg-kGxeB8bFal-ia28-65K7WDzaAECCLFCrqFYROmfDWke&s=bdhAAZH1QFkvCWb0-Zd5z5qFq2d9j6Ttd9R2xlKDJOk&e= ' },
      { id: 2, name: 'Item 2', description: 'Description 2', price: 2000, category: 'Category 2', image: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__example.com_item2.jpg&d=DwIFAg&c=udBTRvFvXC5Dhqg7UHpJlPps3mZ3LRxpb6__0PomBTQ&r=WzhRhc5arXykYZFRUvZmSQqMCViZX8viSWuHp8zwVLw&m=WmAkjETPjxMukZFNBhGg-kGxeB8bFal-ia28-65K7WDzaAECCLFCrqFYROmfDWke&s=wSS7ffm6OstHljyei1QaPZJKzhZlMdzusZwJ3YEKqGU&e= ' }
    ])
  })
);

describe('AllItemsView', () => {
  it('renders the loading state initially', () => {
    render(<AllItemsView />);
    expect(screen.getByText('Loading items...')).toBeInTheDocument();
  });

  it('renders a list of items after fetch', async () => {
    render(<AllItemsView />);

    // Wait for the items to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });

  it('displays an error message if fetching items fails', async () => {
    // Override the fetch mock to reject the promise
    fetch.mockImplementationOnce(() =>
      Promise.reject('API is down')
    );

    render(<AllItemsView />);

    await waitFor(() => {
      expect(screen.getByText('Failed to load items')).toBeInTheDocument();
    });
  });
});