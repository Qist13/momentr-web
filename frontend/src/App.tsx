import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Categories from "./pages/Categories.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import SourcePage from "./pages/SourcePage.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

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
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
