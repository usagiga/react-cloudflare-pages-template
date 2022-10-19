import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
    // Example
    render(<App />);
    const helloWorldElement = screen.getByText(/Hello World!/i);
    expect(helloWorldElement).toBeInTheDocument();
});
