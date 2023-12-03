import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { HomePage } from "../pages/Homepage/Homepage";
import Catalog from "../pages/Catalog/Catalog";
import Favorites from "../pages/Favorites/Favorites";
import NotFound from "../pages/NotFound/NotFound";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
