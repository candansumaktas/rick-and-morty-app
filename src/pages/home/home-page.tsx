import CharacterList from "../../components/organisms/character-list/character-list";

 
export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Rick & Morty Multiverse</h1>
          <p className="mt-2 text-gray-600">Explore characters from the Rick and Morty API.</p>
        </header>

        <CharacterList />
      </div>
    </main>
  );
}
