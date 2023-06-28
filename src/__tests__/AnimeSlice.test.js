import { configureStore } from '@reduxjs/toolkit';
import animeReducer, { fetchAnime, fetchAnimeById } from '../redux/anime/AnimeSlice';

describe('animeSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        anime: animeReducer,
      },
    });
  });

  it('should fetch anime list', async () => {
    await store.dispatch(fetchAnime('some-category'));
    const state = store.getState().anime;

    expect(state.loading).toBe(false);
    expect(state.animeList).toHaveLength(20); // Assuming the response returns 20 items
  });

  it('should fetch anime by ID', async () => {
    const animeId = '12345';
    await store.dispatch(fetchAnimeById(animeId));
    const state = store.getState().anime;

    expect(state.loadingAnime).toBe(false);
    expect(state.anime.id).toBe(animeId);
  });
});
