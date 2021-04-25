import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <header className="sidebar">
            <NavLink className="logo" to="/">
                Landing
            </NavLink>
            <NavLink className="button" to="/about">
                About
            </NavLink>
            <NavLink className="button" to="/catalog">
                Catalog
            </NavLink>
            <NavLink className="button" to="/support">
                Projects
            </NavLink>
            <NavLink className="button" to="/about">
                Resume
            </NavLink>
            <NavLink className="button" to="/contact">
                Contact
            </NavLink>
        </header>
    )
}

export default NavBar