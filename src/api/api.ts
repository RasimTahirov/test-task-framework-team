import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuthors, ILocations, IPaintings } from "../types/types";

export const paintingsApi = createApi({
  reducerPath: "paintingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-front.framework.team/" }),
  endpoints: (builder) => ({
    getPaintings: builder.query<IPaintings[], void>({
      query: () => "paintings",
    }),
    getAuthor: builder.query<IAuthors[], void>({
      query: () => 'authors'
    }),
    getLocation: builder.query<ILocations[], void>({
      query: () => 'locations'
    })
  }),
});

export const { useGetPaintingsQuery, useGetAuthorQuery, useGetLocationQuery } = paintingsApi;
