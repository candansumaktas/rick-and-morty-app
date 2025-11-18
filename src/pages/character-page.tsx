import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Character } from "../components/types/character";

export default function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched character detail:", data);
        setCharacter(data);
      });
  }, [id]);

  if (!character) return <p>Loading...</p>;

  // Status renkleri
  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive": return "green";
      case "dead": return "red";
      default: return "gray";
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: 12, display: "flex", gap: 20 }}>
      <img src={character.image} alt={character.name} style={{ width: 250, borderRadius: 12 }} />

      <div style={{ flex: 1 }}>
        <h1>{character.name}</h1>
        <p>
          Status: <span style={{ color: statusColor(character.status), fontWeight: "bold" }}>{character.status}</span>
        </p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
        <p>Appeared in <strong>{character.episode.length}</strong> episode(s)</p>
        <p>Created: {new Date(character.created).toLocaleDateString()}</p>

        <div style={{ marginTop: 20 }}>
          {character.episode.slice(0, 5).map((ep, i) => (
            <span key={i} style={{
              display: "inline-block",
              padding: "4px 8px",
              margin: "2px",
              backgroundColor: "#eee",
              borderRadius: 8,
              fontSize: 12
            }}>
              Episode {i + 1}
            </span>
          ))}
          {character.episode.length > 5 && <span style={{ marginLeft: 8, fontSize: 12 }}>+{character.episode.length - 5} more</span>}
        </div>
      </div>
    </div>
  );
}
