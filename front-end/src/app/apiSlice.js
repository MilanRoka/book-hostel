import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
        headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  reducerPath: 'api',
  endpoints: () => ({
    getPosts: {
        query: () => '/posts',
    }
  }),
});