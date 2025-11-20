import type { Character, CharacterResponse } from "../../types/character";
import { ENDPOINTS } from "../endpoints";
import { http } from "../http-client";

export const CharactersAPI = {
    getAll: async (page = 1): Promise<CharacterResponse> => {
        const res = await http.get<CharacterResponse>(`${ENDPOINTS.CHARACTERS}?page=${page}`);
        return res.data;
    },

    getById: async (id: number): Promise<Character> => {
        const res = await http.get<Character>(`${ENDPOINTS.CHARACTERS}/${id}`);
        return res.data;
    },

    filter: async (params: Record<string, string>): Promise<CharacterResponse> => {
        const res = await http.get<CharacterResponse>(ENDPOINTS.CHARACTERS, { params });
        return res.data;
    },
};
