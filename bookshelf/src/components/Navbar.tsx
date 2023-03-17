import React from 'react';

interface NavbarProps {
    page: string,
}

export default function Navbar({page}: NavbarProps) {

    return (
        <nav className='navbar navbar-default navbar-expand-md navbar-dark' style={{backgroundColor: 'maroon'}}>
            <h2 className='navbar-brand mb-0 h2' data-testid='navheader'>{page}</h2>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarMobileToggler'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarMobileToggler'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <a className='nav-link text-bg-success' href="/">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="/mybooks">My Books</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="/findbooks">Find Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}