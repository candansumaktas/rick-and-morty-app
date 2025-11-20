import type { ICharacter, ICharacterResponse } from "../../types/character";
import { ENDPOINTS } from "../endpoints";
import { http } from "../http-client";

export const CharactersAPI = {
    getAll: async (page = 1): Promise<ICharacterResponse> => {
        const res = await http.get<ICharacterResponse>(`${ENDPOINTS.CHARACTERS}?page=${page}`);
        return res.data;
    },

    getById: async (id: number): Promise<ICharacter> => {
        const res = await http.get<ICharacter>(`${ENDPOINTS.CHARACTERS}/${id}`);
        return res.data;
    },

    filter: async (params: Record<string, string>): Promise<ICharacterResponse> => {
        const res = await http.get<ICharacterResponse>(ENDPOINTS.CHARACTERS, { params });
        return res.data;
    },
};
