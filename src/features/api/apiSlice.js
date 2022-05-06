import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.breakingbadapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (searchTerm) => `/characters?name=${searchTerm}`,
    }),
    getCharacterByName: builder.query({
      query: (characterName) => `/characters?name=${characterName}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByNameQuery } = apiSlice;
