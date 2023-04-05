
import { configureStore } from '@reduxjs/toolkit';
import {useDispatch, useSelector } from 'react-redux';
import { apiSlice } from './apiSlice';


export const store = configureStore({
    reducer: {
        api: apiSlice.reducer,
   
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });


