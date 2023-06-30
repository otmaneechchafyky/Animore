import { configureStore } from '@reduxjs/toolkit';
import animeReducer from './anime/AnimeSlice';

const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});

export default store;
