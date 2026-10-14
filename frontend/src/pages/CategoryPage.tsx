import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

function CategoryPage() {
    const { categoryId } = useParams();

    if (!categoryId) {
        return <NotFound />;
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to={`/categories/${categoryId}/1`}>Source 1</Link>
                </li>
                <li>
                    <Link to={`/categories/${categoryId}/2`}>Source 2</Link>
                </li>
                <li>
                    <Link to={`/categories/${categoryId}/3`}>Source 3</Link>
                </li>
            </ul>
        </div>
    );
}

export default CategoryPage;
