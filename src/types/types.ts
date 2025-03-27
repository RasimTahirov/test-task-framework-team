export interface IPaintings {
  id: number;
  authorId: number;
  created: string;
  imageUrl: string;
  locationId: number;
  name: string;
}

export interface IAuthors {
  id: number;
  name: string
}

export interface ILocations {
  id: number;
  location: string
}