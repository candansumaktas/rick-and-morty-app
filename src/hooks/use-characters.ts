import { useState, useEffect } from "react";
import type { Character } from "../components/types/character";



export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched characters:", data.results);
        setCharacters(data.results);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading, error };
};
