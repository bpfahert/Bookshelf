import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <nav className='navbar navbar-default navbar-expand-md navbar-dark' style={{backgroundColor: 'maroon'}}>
            <h2 className='navbar-brand mb-0 h2' data-testid='navheader'>Bookshelf</h2>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarMobileToggler'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarMobileToggler'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link text-bg-success' to="/Bookshelf">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/mybooks">My Books</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/findbooks">Find Books</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}