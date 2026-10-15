import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-brand">
                Moment<span>r</span>
            </Link>
            <div className="nav-links">
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/categories" className="nav-link">
                    Categories
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
