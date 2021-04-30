import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="sidebar">
            <NavLink className="logo" to="/">
                Landing
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/catalog">
                Catalog
            </NavLink>
            <NavLink to="/projects">
                Projects
            </NavLink>
            <NavLink to="/resume">
                Resume
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
        </div>
    )
}

export default NavBar