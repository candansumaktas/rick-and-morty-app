import CharacterCard from "../molecules/character-card";
import { useCharacters } from "../../hooks/use-characters";

export default function CharacterList() {
  const { characters, loading, error } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
