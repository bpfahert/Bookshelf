import React from 'react';
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

    const searchtitles = searchResults.map(book => {
        return {title: book.title, author: book.authors[0] ? book.authors[0].name : 'Unknown', id: book.id, subjects: book.subjects};
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        bookSearch(searchInput);
    }
    
    return(
        <div>
            <div className='d-flex flex-column align-items-center'>
                <h3 style={{color: 'white'}}>Search by Title or Author</h3>
                <form className='d-flex flex-column mb-3' onSubmit={handleSubmit}>
                    <div className='form-group mb-1'>
                        <div className='form-floating'>
                            <input type='text' className='form-control' value={searchInput} onChange={handleChange} data-testid='searchinput' id='searchinput' placeholder='Book'></input>
                            <label className='form-label' htmlFor='searchinput'>Search</label>
                        </div>
                    </div>
                    <button className='w-50 align-self-center' type='button' onClick={() => bookSearch(searchInput)}>Search</button>
                </form>
                <Shelf booklist={searchtitles} />
            </div>
        </div>
    )
}