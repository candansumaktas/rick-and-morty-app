import { useEffect, useState } from "react";
 import type { ICharacter } from "../types/character";
import { CharactersAPI } from "../api/rick-and-morty/characters.api";

export function useCharacterDetail(id?: string | number | null) {
  const [data, setData] = useState<ICharacter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setData(null);
      setLoading(false);
      return;
    }

    let mounted = true;
    setLoading(true);
    setError(null);

    CharactersAPI.getById(Number(id))
      .then(res => {
        if (!mounted) return;
        setData(res);
      })
      .catch(err => {
        if (!mounted) return;
        setError(err.message || "Failed to load character");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  return { data, loading, error };
}
