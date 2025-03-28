export interface IPaintings {
  id: number;
  authorId: number;
  created: string;
  imageUrl: string;
  locationId: number;
  name: string;
  author?: IAuthors;
  location?: ILocations;
}
export interface IAuthors {
  id: number;
  name: string;
}

export interface ILocations {
  id: number;
  location: string;
}

export interface IPaintingsResponse {
  payload: IPaintings[];
  total: number;
}

export type Theme = "light" | "dark";