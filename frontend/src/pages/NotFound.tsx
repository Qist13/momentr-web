import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="hero">
            <h1 className="hero-title">Page not found</h1>
            <p className="hero-text">
                This page doesn't exist, or the clip may have been removed.
            </p>
            <Link to="/" className="button">
                Go home
            </Link>
        </section>
    );
}

export default NotFound;
