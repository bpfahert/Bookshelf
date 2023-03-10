import reducer, { addBook } from '../features/bookshelfSlice';

describe('bookshelf Reducer', () => {
    it('should return the initial state when no action is specified', () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
          booklist: [] 
        })
    })

    it('should add a book to the state booklist when addBook is dispatched', () => {
        const prevState = {
            booklist: [] 
        }
        const testBook = {title: 'Ulysses', author: 'James Joyce', id: 4300};
        expect(reducer(prevState, addBook(testBook))).toEqual({booklist: [{title: 'Ulysses', author: 'James Joyce', id: 4300}]});
    })
      
})
