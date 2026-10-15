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
            {source && (
                <Link to={`/categories/${source.categoryId}/${source.id}`}>
                    ← {source.name}
                </Link>
            )}
            <h1>{clip.title}</h1>
            <video
                src={clip.videoUrl}
                poster={clip.thumbnailUrl}
                controls
            />
            <p>
                {formatDuration(clip.durationSeconds)} ·{" "}
                {new Date(clip.createdAt).toLocaleDateString()}
            </p>
        </div>
    );
}

export default ClipPage;
