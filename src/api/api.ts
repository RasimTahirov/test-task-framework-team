import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPaintings } from "../types/types";

export const paintingsApi = createApi({
  reducerPath: "paintingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test-front.framework.team/" }),
  endpoints: (bulider) => ({
    getPaintings: bulider.query<IPaintings[], void>({
      query: () => "paintings",
    }),
  }),
});

export const { useGetPaintingsQuery } = paintingsApi;
