import CharacterCard from "../../molecules/character-card/character-card";
import { useCharacters } from "../../../hooks/use-characters";

interface Props {
  search: string;
}

export default function CharacterList({ search }: Props) {
  const { characters, loading, error } = useCharacters(search);

  if (loading) return <p className="text-gray-700">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
