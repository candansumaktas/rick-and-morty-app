import { useState } from "react";
import SearchBar from "../../components/molecules/search-bar/search-bar";
import CharacterList from "../../components/organisms/character-list/character-list";
 
export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 via-gray-100 to-gray-200 p-6">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
          Rick & Morty Universe
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          Explore characters, their episodes, and origins
        </p>

        <div className="mt-4">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <CharacterList search={search} />
      </main>
    </div>
  );
}
