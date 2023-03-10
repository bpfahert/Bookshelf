import React from 'react';
import Navbar from './Navbar';
import { useAppSelector } from '../app/hooks';

export default function Home() {


    return(
        <div>
            < Navbar page='Bookshelf'/>
            <div className='jumbotron' style={{backgroundColor: 'white'}}>
                <h2 className='display-4' data-testid='homeh2'>Welcome to Book Club!</h2>
                <p className='lead'>Hello! This website is focused on recommending free ebooks via <a href="https://www.gutenberg.org/">Project Gutenberg</a> based on books you've enjoyed!</p>
                <hr className='my-4' />
                <p>Use the Find Books feature to add books you've read or are interested in to your collection. You'll then be 
            recommended books based on what you've read! Since this site uses a public api <a href='https://gutendex.com/'>Gutendex</a> that uses data from Project Gutenberg, you'll only be able to add books that aren't under copyright. These typically include the classics 
            such as War and Peace, Don Quixote, and works by Shakespeare. The good news is that any books recommended can be found for free! Many books that are required by high school and college courses can be found on Project Gutenberg in different formats.</p>
            </div>
        </div>
    )
}