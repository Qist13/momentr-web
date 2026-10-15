import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="hero">
            <h1 className="hero-title">Capture the moment after it happens.</h1>
            <p className="hero-text">
                Momentr saves the last few seconds of whatever you're doing, so
                you can share the play, the bug, or the moment you didn't plan
                to record.
            </p>
            <Link to="/categories" className="button">
                Browse clips
            </Link>
        </section>
    );
}

export default Home;
