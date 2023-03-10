import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

export interface BookType {
    title: string, 
    author?: string, 
    id: number,
}

export interface BookshelfState {
    booklist: { title: string, author?: string, id: number}[],
}

const initialState: BookshelfState = {
    booklist: []
}

export const bookshelfSlice = createSlice({
    name: 'bookshelf',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<BookType>) => {
            state.booklist = [...state.booklist, action.payload];
        },
        removeBook: (state, action: PayloadAction<BookType>) => {
            state.booklist = state.booklist.filter(book => book.id !== action.payload.id);
        }
    },
})

export const selectBooklist = (state: RootState) => state.bookshelf.booklist;
export const { addBook, removeBook } = bookshelfSlice.actions;
export default bookshelfSlice.reducer;