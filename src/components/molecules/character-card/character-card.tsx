import { Link } from "react-router-dom";
import type { ICharacter } from "../../../types/character";
import Button from "../../atoms/button/button";

interface Props {
  character: ICharacter;
}

export default function CharacterCard({ character }: Props) {
  return (
    <Link to={`/character/${character.id}`} className="group h-full flex text-inherit no-underline">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full w-full">
        <div className="relative p-4 flex justify-center">
          <img
            src={character.image}
            alt={character.name}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover object-center border-4 border-gray-100 shadow-md"
          />
          <span
            className={`absolute top-2 left-4 px-3 py-1 text-sm font-semibold rounded-full 
            ${character.status === "Alive" ? "bg-green-100 text-green-800" :
                character.status === "Dead" ? "bg-red-100 text-red-800" :
                  "bg-gray-100 text-gray-800"}`}
          >
            {character.status}
          </span>
        </div>
        <div className="p-4 flex flex-col flex-1 text-center">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {character.name}
          </h2>
          <p className="text-gray-500 mt-1 text-sm">{character.species}</p>
          <p className="text-gray-600 mt-1 text-sm">{character.origin.name}</p>
          <Button className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600">
            Detay
          </Button>
        </div>
      </div>
    </Link>
  );
}
