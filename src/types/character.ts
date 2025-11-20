export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: string[];  
  url: string;
  created: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface ICharacterResponse {
  info: Info;
  results: ICharacter[];
}

export interface Info {
  count: number;
  pages: number;
  next?: string | null;
  prev?: string | null;
}