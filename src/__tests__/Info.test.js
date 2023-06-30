import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../components/Info';

test('renders Details component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Details />
    </Provider>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
