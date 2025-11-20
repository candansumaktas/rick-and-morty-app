 import { ENDPOINTS } from "../endpoints";
import { http } from "../http-client";

export const EpisodesAPI = {
  getAll: async (page = 1) =>
    (await http.get(`${ENDPOINTS.EPISODES}/?page=${page}`)).data,

  getById: async (id: number) =>
    (await http.get(`${ENDPOINTS.EPISODES}/${id}`)).data
};
