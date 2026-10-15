import { useParams } from "react-router-dom";
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

    return (
        <div>
            <h1>{source.name}</h1>
            {sourceClips.length === 0 ? (
                <p>No clips yet</p>
            ) : (
                <ul>
                    {sourceClips.map((clip) => (
                        <li key={clip.id}>
                            <h2>{clip.title}</h2>
                            <p>{formatDuration(clip.durationSeconds)}</p>
                            <video
                                src={clip.videoUrl}
                                poster={clip.thumbnailUrl}
                                preload="none"
                                controls
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SourcePage;
