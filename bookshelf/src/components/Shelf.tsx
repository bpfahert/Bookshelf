import React from 'react';
import Book from './Book';
import type { BookshelfState, BookType } from '../interfaces/types';


export default function Shelf({booklist} : BookshelfState) {

    const bookElements = booklist.map((book : BookType) => {
        return (
            <Book title={book.title} author={book.author} id={book.id} subjects={book.subjects}/>
        )
    });

    return(
        <div className='container-fluid text-center'>
            <ul style={{listStyle: 'none',display:'flex', justifyContent:'flex-start', flexWrap: 'wrap', gap:'10px' }}>
                {bookElements}
            </ul>
        </div>
    )
}