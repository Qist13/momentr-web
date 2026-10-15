import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import SourcePage from "./pages/SourcePage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ClipPage from "./pages/ClipPage";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="categories" element={<Categories />} />
                <Route
                    path="categories/:categoryId"
                    element={<CategoryPage />}
                />
                <Route
                    path="categories/:categoryId/:sourceId"
                    element={<SourcePage />}
                />
                <Route path="clips/:clipId" element={<ClipPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
