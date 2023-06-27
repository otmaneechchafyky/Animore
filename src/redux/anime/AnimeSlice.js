import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://kitsu.io/api/edge';

const initialState = {
  animeList: [],
  anime: [],
  loading: true,
};

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async (category) => {
  try {
    const response = await axios.get(`${baseUrl}/anime?filter[categories]=${category}&page[limit]=20`);
    const animeList = response.data.data.map((anime) => ({
      id: anime.id,
      ...anime.attributes,
    }));
    return animeList;
  } catch (error) {
    return error;
  }
});

export const fetchAnimeById = createAsyncThunk('anime/fetchAnimeById', async (animeId) => {
  try {
    const response = await axios.get(`${baseUrl}/anime/${animeId}`);
    const animeData = {
      id: response.data.data.id,
      ...response.data.data.attributes,
    };
    return animeData;
  } catch (error) {
    return error;
  }
});

const animeSlice = createSlice({
  name: 'anime',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAnime.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.animeList = action.payload;
      })
      .addCase(fetchAnime.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAnimeById.pending, (state) => {
        state.loadingAnime = true;
      })
      .addCase(fetchAnimeById.fulfilled, (state, action) => {
        state.loadingAnime = false;
        state.anime = action.payload;
      })
      .addCase(fetchAnimeById.rejected, (state) => {
        state.loadingAnime = false;
      });
  },
});

export default animeSlice.reducer;
