import { useCharacters } from "../../../hooks/use-characters";
import CharacterCard from "../../molecules/character-card/character-card";

 
export default function CharacterList() {
  const { data: characters, loading, error } = useCharacters();

  if (loading) return <p className="text-center text-gray-500 mt-8">Loading...</p>;
  if (error) return <p className="text-center text-rose-500 mt-8">Error: {error}</p>;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
        {characters.map((c) => (
          <div key={c.id} className="h-full">
            <CharacterCard character={c} />
          </div>
        ))}
      </div>
    </div>
  );
}
