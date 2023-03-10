import React from 'react';
import Book from './Book';
import type { BookshelfState, BookType } from '../features/bookshelfSlice';

export default function Shelf({booklist} : BookshelfState) {

    const bookElements = booklist.map((book : BookType) => {
        return (
            <Book title={book.title} author={book.author} id={book.id}/>
      )});

    return(
        <div className='container-fluid text-center'>
            <ul style={{listStyle: 'none',display:'flex', justifyContent:'flex-start', flexWrap: 'wrap' }}>
                {bookElements}
            </ul>
        </div>
    )
}