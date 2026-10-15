import { Link, useParams } from "react-router-dom";
import { categories } from "../data/categories";
import { sources } from "../data/sources";
import { clips } from "../data/clips";
import { formatDuration } from "../utils/formatDuration";
import NotFound from "./NotFound";

function SourcePage() {
    const { categoryId, sourceId } = useParams();

    if (!categoryId || !sourceId) {
        return <NotFound />;
    }

    const source = sources.find((source) => source.id === sourceId);
    const sourceClips = clips.filter((clip) => clip.sourceId === sourceId);

    if (!source) {
        return <NotFound />;
    }

    const category = categories.find((category) => category.id === categoryId);

    return (
        <div>
            <header className="page-header">
                {category && (
                    <Link
                        to={`/categories/${category.id}`}
                        className="back-link"
                    >
                        ← {category.name}
                    </Link>
                )}
                <h1 className="page-title">{source.name}</h1>
            </header>
            {sourceClips.length === 0 ? (
                <p className="empty-state">No clips yet</p>
            ) : (
                <ul className="clip-grid">
                    {sourceClips.map((clip) => (
                        <li key={clip.id}>
                            <Link to={`/clips/${clip.id}`} className="clip-card">
                                <div className="clip-thumb">
                                    <img
                                        src={clip.thumbnailUrl}
                                        alt={clip.title}
                                    />
                                    <span className="clip-duration">
                                        {formatDuration(clip.durationSeconds)}
                                    </span>
                                </div>
                                <h2 className="clip-title">{clip.title}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SourcePage;
