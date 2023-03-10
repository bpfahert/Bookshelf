import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface BookType {
    title: string, 
    author?: string, 
    id: number,
}

interface bookshelfState {
    booklist: { title: string, author?: string, id: number}[],
}

const initialState: bookshelfState = {
    booklist: []
}

export const bookshelfSlice = createSlice({
    name: 'bookshelf',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<BookType>) => {
            state.booklist = [...state.booklist, action.payload];
        }
    },
})

export const selectBooklist = (state: RootState) => state.bookshelf.booklist;
export const { addBook } = bookshelfSlice.actions;
export default bookshelfSlice.reducer;