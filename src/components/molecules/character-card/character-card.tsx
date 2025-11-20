 import { Link } from "react-router-dom";
 import type { Character } from "../../../types/character";

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    <Link
      to={`/character/${character.id}`}
      className="group h-full flex"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full w-full">
        <div className="relative">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-56 sm:h-64 md:h-60 lg:h-64 object-cover object-center rounded-t-2xl bg-gray-100"
          />
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-sm font-semibold rounded-full 
            ${character.status === "Alive" ? "bg-green-100 text-green-800" :
                character.status === "Dead" ? "bg-red-100 text-red-800" :
                  "bg-gray-100 text-gray-800"}`}
          >
            {character.status}
          </span>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
              {character.name}
            </h2>
            <p className="text-gray-500 mt-1 text-sm">{character.species}</p>
            <p className="text-gray-600 mt-1 text-sm truncate">{character.origin.name}</p>
            <p className="text-gray-600 mt-1 text-sm truncate">{character.location.name}</p>
            <p className="text-gray-500 mt-1 text-sm">Appeared in {character.episode.length} episode(s)</p>
          </div>
          <button className="mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm">
            Detay
          </button>
        </div>
      </div>
    </Link>
  );
}
