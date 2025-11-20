import { useEffect, useState } from "react";
 import type { Character } from "../types/character";
import { CharactersAPI } from "../api/rick-and-morty/characters.api";

export function useCharacters(page = 1) {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

CharactersAPI.getAll(page)
  .then(res => {
    setData(res.results);
  })
  .catch(err => setError(err.message))
  .finally(() => setLoading(false));


    return () => {
      mounted = false;
    };
  }, [page]);

  return { data, loading, error };
}
