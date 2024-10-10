import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddItem from '../public/react/components/AddItem';

describe('AddItem Component', () => {
    const mockAddOnItem = jest.fn();

    beforeEach(() => {
        render(<AddItem addOnItem={mockAddOnItem}/>)
    });


test('correctly adds mock item with correct values', () => {
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Fake Item' }});
    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: '15.00' }});
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Fake Category' }});
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(mockAddOnItem).toHaveBeenCalledWith(
        expect.objectContaining({
            name: 'Fake Item',
            price: 15.00,
            category: 'Fake Category',
        })
    );
});

});
