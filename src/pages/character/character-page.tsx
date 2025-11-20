import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CharactersAPI } from "../../api/rick-and-morty/characters.api";
import type { Character } from "../../types/character";
 
export default function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    if (!id) return;

    CharactersAPI.getById(Number(id))
      .then(res => {
        if (!mounted) return;
        setCharacter(res);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));

    return () => { mounted = false; };
  }, [id]);

  if (loading || !character) return <p className="text-center mt-20">Loading...</p>;

  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive": return "green";
      case "dead": return "red";
      default: return "gray";
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-6">
      <img
        src={character.image}
        alt={character.name}
        className="w-64 h-64 object-cover rounded-2xl mx-auto md:mx-0"
      />

      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900">{character.name}</h1>
        <p className="mt-2 text-gray-700">
          Status: <span className={`font-semibold text-${statusColor(character.status)}-600`}>{character.status}</span>
        </p>
        <p className="mt-1 text-gray-700">Species: {character.species}</p>
        <p className="mt-1 text-gray-700">Gender: {character.gender}</p>
        <p className="mt-1 text-gray-700">Origin: {character.origin.name}</p>
        <p className="mt-1 text-gray-700">Location: {character.location.name}</p>
        <p className="mt-1 text-gray-700">Appeared in <strong>{character.episode.length}</strong> episode(s)</p>
        <p className="mt-1 text-gray-500 text-sm">Created: {new Date(character.created).toLocaleDateString()}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {character.episode.slice(0, 5).map((ep, i) => (
            <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              Episode {i + 1}
            </span>
          ))}
          {character.episode.length > 5 && (
            <span className="text-sm text-gray-500 ml-2">+{character.episode.length - 5} more</span>
          )}
        </div>
      </div>
    </div>
  );
}
