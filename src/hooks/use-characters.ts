import { useEffect, useState } from "react";
import type { ICharacter } from "../types/character";
import { CharactersAPI } from "../api/rick-and-morty/characters.api";

export function useCharacters(search: string = "") {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    const params: Record<string, string> = search ? { name: search } : {};

    CharactersAPI.filter(params)
      .then(res => {
        if (!mounted) return;
        setCharacters(res.results);
      })
      .catch(err => {
        if (!mounted) return;
        setError(err.message || "Failed to load characters");
        setCharacters([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => { mounted = false; };
  }, [search]);

  return { characters, loading, error };
}
