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
        <div className='card text-center border-dark mb-3 d-flex flew- justify-content-start align-items-center' style={{width: '16rem', height: "13rem"}}>
            <li className='overflow-auto'><h5>{title}</h5></li>
            <li>by {author}</li>
            <li className='mt-auto'>{isOnBookshelf(booklist, currentBook) ? 
            <button type='button' className='btn btn-secondary' onClick={() => dispatch(removeBook(currentBook))}>Remove from your bookshelf</button>
            : <button type='button' className='btn btn-secondary' onClick={() => dispatch(addBook(currentBook))}>Add to your bookshelf</button>}
            </li>
            <li className=''><a href={`https://www.gutenberg.org/ebooks/${id}`}>Get free eBook</a></li>
        </div>
    )
}

