import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Replace with the path to your Redux store
import AnimeCard from '../components/AnimeCard';

describe('AnimeCard component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <AnimeCard />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
