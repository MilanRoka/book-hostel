import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  reducerPath: 'api',
  endpoints: () => ({}),
  tagTypes: [
    'User',
    'Hostel',
    'Room',
  ]
});
