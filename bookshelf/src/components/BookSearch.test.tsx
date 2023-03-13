import BookSearch from './BookSearch';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event';
import { Provider } from 'react-redux';
import { prepareURL } from './BookSearch';

describe('prepareURL function', ()=> {
    it('returns proper result when input has spaces', () => {
        expect(prepareURL('War and Peace')).toBe('War%20and%20Peace');
    })
})