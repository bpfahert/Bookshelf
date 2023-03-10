import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Home from './Home';
import Navbar from './Navbar';

describe('Home component', () => {
    it('renders h2 correctly', () => {
        render(<Home />);
        expect(screen.getByTestId('homeh2')).toHaveTextContent('Welcome to Book Club!');
    })

    it('renders the navbar page name', () => {
        render(<Home />);
        expect(screen.getByTestId('navheader')).toHaveTextContent('Bookshelf');
    })
})