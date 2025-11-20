import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home-page";
import CharacterPage from "./pages/character/character-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
