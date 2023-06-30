import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders navbar', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );

  // Your assertions and test logic here
});
