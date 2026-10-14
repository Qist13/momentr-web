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
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            {categorySources.length === 0 ? (
                <p>No sources yet</p>
            ) : (
                <ul>
                    {categorySources.map((source) => (
                        <li key={source.id}>
                            <Link to={`/categories/${categoryId}/${source.id}`}>
                                {source.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CategoryPage;
