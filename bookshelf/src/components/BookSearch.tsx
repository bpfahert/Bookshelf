import React from 'react';
import Navbar from './Navbar';
import Book from './Book';
import Shelf from './Shelf';

export default function BookSearch() {

    interface JSONResponse {
        id: number,
        title: string,
        subjects: string[],
        authors: {
            "birth_year": number | null,
            "death_year": number | null,
            "name": string,
        }[],
        translators: {
            "birth_year": number | null,
            "death_year": number | null,
            "name": string,
        }[],
        bookshelves: string[],
        languages: string[],
        copyright: boolean | null,
        media_type: string,
        download_count: number
    }

    const [searchResults, setSearchResults] = React.useState<JSONResponse[]>([]);
    const [searchInput, setSearchInput] = React.useState<string>('');

    function prepareURL(input: string) {
        const url = input.replaceAll(' ', '%20');
        return url;
    }

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
            <Book title={book.title} author={book.authors[0] ? book.authors[0].name : 'Unknown'} id={book.id} />
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