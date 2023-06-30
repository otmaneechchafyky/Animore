import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchAnimeById } from '../redux/anime/AnimeSlice';

const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('fetchAnimeById', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should fetch anime by ID and return anime data', async () => {
    const animeId = '123';
    const expectedAnimeData = {
      id: animeId,
      title: 'Test Anime',
      description: 'This is a test anime',
    };

    jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        data: {
          id: animeId,
          attributes: { ...expectedAnimeData },
        },
      },
    });

    await store.dispatch(fetchAnimeById(animeId));

    expect(store.getActions()).toMatchSnapshot();
  });

  it('should handle error if anime fetch by ID fails', async () => {
    const animeId = '123';

    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Anime fetch failed'));

    await store.dispatch(fetchAnimeById(animeId));

    expect(store.getActions()).toMatchSnapshot();
  });
});
