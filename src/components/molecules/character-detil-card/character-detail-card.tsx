import type { ICharacter } from "../../../types/character";
import Avatar from "../../atoms/avatar/avatar";
import Status from "../../atoms/status/status";

 
interface Props {
  character: ICharacter;
}

export default function CharacterDetailCard({ character }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
      <div className="flex justify-center md:justify-start">
        <Avatar src={character.image} alt={character.name} size={250} />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-900">{character.name}</h1>
        <Status status={character.status} />
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
        <p><strong>Location:</strong> {character.location.name}</p>
        <p><strong>Episodes:</strong> {character.episode.length}</p>
        <p><strong>Created:</strong> {new Date(character.created).toLocaleDateString()}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {character.episode.slice(0, 5).map((ep, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-gray-100 rounded-full shadow-sm"
            >
              Episode {i + 1}
            </span>
          ))}
          {character.episode.length > 5 && (
            <span className="text-xs text-gray-500 ml-2">
              +{character.episode.length - 5} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
