import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuthors, ILocations, IPaintings } from "../types/types";

export const paintingsApi = createApi({
  reducerPath: "paintingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-front.framework.team/" }),
  endpoints: (builder) => ({
    getPaintings: builder.query<
      { payload: IPaintings; total: number },
      { _page: number; _limit: number }
    >({
      query: ({ _page, _limit }) => `paintings?_page=${_page}&_limit=${_limit}`,
      transformResponse: (res: IPaintings, meta) => {
        const total = Number(meta?.response?.headers.get("X-Total-Count"));
        return { payload: res, total };
      },
    }),
    getAuthor: builder.query<IAuthors[], void>({
      query: () => "authors",
    }),
    getLocation: builder.query<ILocations[], void>({
      query: () => "locations",
    }),
  }),
});

export const { useGetPaintingsQuery, useGetAuthorQuery, useGetLocationQuery, useLazyGetPaintingsQuery } =
  paintingsApi;
