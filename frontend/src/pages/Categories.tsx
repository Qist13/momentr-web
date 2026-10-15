import { Link } from "react-router-dom";
import { categories } from "../data/categories";

function Categories() {
    return (
        <div>
            <header className="page-header">
                <h1 className="page-title">Categories</h1>
            </header>
            <ul className="grid">
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            to={`/categories/${category.id}`}
                            className="card"
                        >
                            <h2 className="card-title">{category.name}</h2>
                            <p className="card-text">{category.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
