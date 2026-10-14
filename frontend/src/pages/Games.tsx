import { Link } from "react-router-dom";

function Games() {
    return (
        <div>
            <h1>Games</h1>
            <ul>
                <li>
                    <Link to="/games/1">Game 1</Link>
                </li>
                <li>
                    <Link to="/games/2">Game 2</Link>
                </li>
                <li>
                    <Link to="/games/3">Game 3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Games;
