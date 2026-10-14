import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

function SourcePage() {
    const { categoryId, sourceId } = useParams();

    if (!categoryId || !sourceId) {
        return <NotFound />;
    }

    return (
        <div>
            <h1>Source</h1>
            <p>Category ID: {categoryId}</p>
            <p>Source ID: {sourceId}</p>
        </div>
    );
}

export default SourcePage;
