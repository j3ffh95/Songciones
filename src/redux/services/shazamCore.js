import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: headers => {
      headers.set(
        "X-RapidAPI-Key",
        "3e7f02a7dcmshaeeb02dfb13d407p1a5220jsn0e7ae2aa0a35"
      );

      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
