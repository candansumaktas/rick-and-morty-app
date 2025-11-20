import { ENDPOINTS } from "../endpoints";
import { http } from "../http-client";

export const LocationsAPI = {
    getAll: async (page = 1) =>
        (await http.get(`${ENDPOINTS.LOCATIONS}/?page=${page}`)).data,

    getById: async (id: number) =>
        (await http.get(`${ENDPOINTS.LOCATIONS}/${id}`)).data
};
