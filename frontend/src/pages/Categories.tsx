import { Link } from "react-router-dom";

function Categories() {
    return (
        <ul>
            <li>
                <Link to="/categories/1">Category 1</Link>
            </li>
            <li>
                <Link to="/categories/2">Category 2</Link>
            </li>
            <li>
                <Link to="/categories/3">Category 3</Link>
            </li>
        </ul>
    );
}

export default Categories;
