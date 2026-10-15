import { Link, useParams } from "react-router-dom";
import { categories } from "../data/categories";
import { sources } from "../data/sources";
import NotFound from "./NotFound";

function CategoryPage() {
    const { categoryId } = useParams();

    if (!categoryId) {
        return <NotFound />;
    }

    const category = categories.find((category) => category.id === categoryId);

    if (!category) {
        return <NotFound />;
    }

    const categorySources = sources.filter(
        (source) => source.categoryId === categoryId,
    );

    return (
        <div>
            <header className="page-header">
                <Link to="/categories" className="back-link">
                    ← Categories
                </Link>
                <h1 className="page-title">{category.name}</h1>
                <p className="page-subtitle">{category.description}</p>
            </header>
            {categorySources.length === 0 ? (
                <p className="empty-state">No sources yet</p>
            ) : (
                <ul className="grid">
                    {categorySources.map((source) => (
                        <li key={source.id}>
                            <Link
                                to={`/categories/${categoryId}/${source.id}`}
                                className="card"
                            >
                                <h2 className="card-title">{source.name}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CategoryPage;
