import { Link } from "react-router-dom";
import { categories } from "../data/categories";

function Categories() {
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/categories/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
