import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface bookshelfState {
    booklist: { title: string, author?: string, id: number}[],
}

const initialState: bookshelfState = {
    booklist: [{ title: 'Ulysses', author: 'James Joyce', id: 4300}]
}

export const bookshelfSlice = createSlice({
    name: 'bookshelf',
    initialState,
    reducers: {

    },
})

export const selectBooklist = (state: RootState) => state.bookshelf.booklist;

export default bookshelfSlice.reducer;