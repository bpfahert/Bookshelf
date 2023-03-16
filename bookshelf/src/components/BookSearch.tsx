import React from 'react';
import Navbar from './Navbar';
import Book from './Book';
import Shelf from './Shelf';
import { JSONResponse } from '../interfaces/types';

export function prepareURL(input: string) {
    const url = input.replaceAll(' ', '%20');
    return url;
}

export default function BookSearch() {
    const [searchResults, setSearchResults] = React.useState<JSONResponse[]>([]);
    const [searchInput, setSearchInput] = React.useState<string>('');

    async function bookSearch(input: string) {
        let searchparameters = prepareURL(input);;
        try{
            const response = await fetch(`http://gutendex.com/books?search=${searchparameters}`, {
                mode: 'cors'
            });
            let searchdata = await response.json();
            setSearchResults(searchdata.results);
        } catch (error) {
            alert("Error!");
        }
    }

    const booktitles = searchResults.map(book => {
        return (
            <Book title={book.title} author={book.authors[0] ? book.authors[0].name : 'Unknown'} id={book.id} subjects={book.subjects}/>
    )});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        bookSearch(searchInput);
    }
    
    return(
        <div>
            <Navbar page='Book Search' />
            <h4>Search by Title or Author</h4>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='searchinput'>Search</label>
                    <input type='text' className='form-control' value={searchInput} onChange={handleChange} data-testid='searchinput' id='searchinput'></input>
                </div>
                <button type='button' onClick={() => bookSearch(searchInput)}>Search</button>
            </form>
            <ul style={{listStyle: 'none',display:'flex', justifyContent:'flex-start', flexWrap: 'wrap' }}>
                {booktitles}
            </ul>
        </div>
    )
}