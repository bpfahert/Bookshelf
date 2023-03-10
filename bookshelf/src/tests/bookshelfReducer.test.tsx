import reducer, { addBook, removeBook } from '../features/bookshelfSlice';

describe('bookshelf Reducer', () => {
    it('should return the initial state when no action is specified', () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
          booklist: [] 
        })
    })

    it('should add a book to the state booklist when addBook is dispatched', () => {
        const prevState = {
            booklist: [] 
        };
        const testBook = {title: 'Ulysses', author: 'James Joyce', id: 4300};
        expect(reducer(prevState, addBook(testBook))).toEqual({booklist: [{title: 'Ulysses', author: 'James Joyce', id: 4300}]});
    })

    it('should remove a book from the state booklist when removeBook is dispatched', () => {
        const prevState = {
            booklist: [{title: 'Ulysses', author: 'James Joyce', id: 4300}] 
        };
        const testBook = {title: 'Ulysses', author: 'James Joyce', id: 4300};
        expect(reducer(prevState, removeBook(testBook))).toEqual({booklist: []});
    })
      
})