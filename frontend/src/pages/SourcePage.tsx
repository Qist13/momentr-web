import { useParams } from "react-router-dom";
import { sources } from "../data/sources";
import NotFound from "./NotFound";

function SourcePage() {
    const { categoryId, sourceId } = useParams();

    if (!categoryId || !sourceId) {
        return <NotFound />;
    }

    const source = sources.find((source) => source.id === sourceId);

    if (!source) {
        return <NotFound />;
    }

    return (
        <div>
            <h1>{source.name}</h1>
        </div>
    );
}

export default SourcePage;
