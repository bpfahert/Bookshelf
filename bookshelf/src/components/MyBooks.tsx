import React from 'react';
import Navbar from './Navbar';
import Shelf from './Shelf';
import { useAppSelector } from '../app/hooks';

export default function MyBooks() {
    const { booklist } = useAppSelector(state => state.bookshelf);

    return (
        <div>
            <Navbar page='My Books' />
            <Shelf booklist={booklist} />
        </div>
    )
}