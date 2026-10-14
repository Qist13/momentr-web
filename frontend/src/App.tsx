import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import GamePage from "./pages/GamePage.tsx";
import Games from "./pages/Games.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="games" element={<Games />} />
                <Route path="games/:gameId" element={<GamePage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
