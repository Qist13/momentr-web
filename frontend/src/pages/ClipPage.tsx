import { Link, useParams } from "react-router-dom";
import { clips } from "../data/clips";
import { sources } from "../data/sources";
import { formatDuration } from "../utils/formatDuration";
import NotFound from "./NotFound";

function ClipPage() {
    const { clipId } = useParams();

    if (!clipId) {
        return <NotFound />;
    }

    const clip = clips.find((clip) => clip.id === clipId);

    if (!clip) {
        return <NotFound />;
    }

    const source = sources.find((source) => source.id === clip.sourceId);

    return (
        <div>
            <header className="page-header">
                {source && (
                    <Link
                        to={`/categories/${source.categoryId}/${source.id}`}
                        className="back-link"
                    >
                        ← {source.name}
                    </Link>
                )}
                <h1 className="page-title">{clip.title}</h1>
            </header>
            <video
                className="clip-player"
                src={clip.videoUrl}
                poster={clip.thumbnailUrl}
                controls
            />
            <p className="clip-meta">
                {formatDuration(clip.durationSeconds)} ·{" "}
                {new Date(clip.createdAt).toLocaleDateString()}
            </p>
        </div>
    );
}

export default ClipPage;
