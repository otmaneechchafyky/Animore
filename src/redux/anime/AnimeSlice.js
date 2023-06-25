import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://kitsu.io/api/edge';

const initialState = {
  animeList: [],
  loading: true,
  totalEpisodes: 0,
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
        state.totalEpisodes += state.animeList.map((anime) => anime.episodeLength);
        // console.log(state.animeList);
      })
      .addCase(fetchAnime.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default animeSlice.reducer;
