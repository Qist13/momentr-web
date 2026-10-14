import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

function GamePage() {
    const { gameId } = useParams();

    if (!gameId) {
        return <NotFound />;
    }

    return <div>Game Page: {gameId}</div>;
}

export default GamePage;
