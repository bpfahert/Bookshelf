import React from 'react';

interface NavbarProps {
    page: string,
}

export default function Navbar({page}: NavbarProps) {

    return (
        <nav  className='navbar navbar-expand-lg bg-success'>
            <h2 className='navbar-brand mb-0 h2' data-testid='navheader'>{page}</h2>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <a style={{color: "black"}} className='nav-link text-bg-success' href="/">Home</a>
                </li>
                <li className='nav-item'>
                    <a style={{color: "black"}} className='nav-link' href="/mybooks">My Books</a>
                </li>
                <li className='nav-item'>
                    <a style={{color: "black"}} className='nav-link' href="/findbooks">Find Books</a>
                </li>
            </ul>
        </nav> 
    )
}