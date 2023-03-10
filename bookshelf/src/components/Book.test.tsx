import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { isOnBookshelf} from './Book';
import type { BookType } from '../features/bookshelfSlice';

describe('isOnBookshelf function', () => {
    const emptylist: BookType[] = [];
    const testlist : BookType[] = [{title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', id: 28054}];
    const testbook = {title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', id: 28054};

    it('returns false if book is not on booklist in state', () => {
        expect(isOnBookshelf(emptylist, testbook)).toBe(false);
    })

    it('returns true if book is on booklist in state', () => {
        expect(isOnBookshelf(testlist, testbook)).toBe(true);
    })
})