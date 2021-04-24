import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <header className="header">
            <NavLink className="logo" to="/">
                home
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

export default Sidebar