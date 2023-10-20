import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addBook, removeBook } from '../features/bookshelfSlice';
import type { BookType } from '../interfaces/types';

export const isOnBookshelf = ((list : BookType[], book: BookType) => {
    return list.map((book: BookType) => book.id).includes(book.id);
});


export default function Book({ title, author, id, subjects } : BookType) {
    const dispatch = useAppDispatch();
    const { booklist } = useAppSelector(state => state.bookshelf)
    const currentBook : BookType = {title: title, author: author, id: id, subjects: subjects};


    return (
        <div className='card text-center border-dark mb-3' style={{width: '16rem'}}>
            <li>{title}</li>
            <li>by {author}</li>
            <li>{isOnBookshelf(booklist, currentBook) ? 
            <button type='button' className='btn btn-secondary' onClick={() => dispatch(removeBook(currentBook))}>Remove from your bookshelf</button>
            : <button type='button' className='btn btn-secondary' onClick={() => dispatch(addBook(currentBook))}>Add to your bookshelf</button>}
            </li>
            <li><a href={`https://www.gutenberg.org/ebooks/${id}`}>Get free eBook</a></li>
        </div>
    )
}

