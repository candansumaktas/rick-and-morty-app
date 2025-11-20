import { useParams } from "react-router-dom";
import CharacterDetailCard from "../../components/molecules/character-detil-card/character-detail-card";
import { useCharacterDetail } from "../../hooks/use-character-detail";

export default function CharacterPage() {
  const { id } = useParams<{ id: string }>();
  const { data: character, loading, error } = useCharacterDetail(id);

  if (loading) return <p className="text-center mt-20 text-gray-700">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!character) return <p className="text-center mt-20 text-gray-700">Character not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 flex justify-center items-start">
      <div className="w-full max-w-3xl">
        <CharacterDetailCard character={character} />
      </div>
    </div>

  );
}
