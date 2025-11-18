import Avatar from "../atoms/avatar";
import type { Character } from "../types/character";
import { Link } from "react-router-dom";

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    <Link to={`/character/${character.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px", borderRadius: "10px", width: 180 }}>
        <Avatar src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>{character.species} - {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </Link>
  );
}
