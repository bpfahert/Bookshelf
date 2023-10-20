import Book from './Book';
import type { BookshelfState, BookType } from '../interfaces/types';


export default function Shelf({booklist} : BookshelfState) {

    const bookElements = booklist.map((book : BookType) => {
        return (
            <Book title={book.title} author={book.author} id={book.id} subjects={book.subjects} key={book.id}/>
        )
    });

    return(
        <div className='container-fluid text-center p-0'>
            <ul className="d-flex justify-content-center flex-wrap p-0" style={{listStyle: 'none', gap:'10px' }}>
                {bookElements}
            </ul>
        </div>
    )
}