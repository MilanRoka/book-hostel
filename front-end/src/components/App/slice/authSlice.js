import { apiSlice } from "../apiSlice";


apiSlice.injectEndpoints({
    endpoints: (build) => ({    
        login: build.mutation({
            query: (body) => ({
                url: '/users/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
        register: build.mutation({
            query: (body) => ({
                url: '/users/register',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});



export const { useLoginMutation, useRegisterMutation } = apiSlice;
