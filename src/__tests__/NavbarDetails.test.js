/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/NavbarDetails';

test('Navbar component matches snapshot', () => {
  const { container } = render(
    <Router>
      <Navbar />
    </Router>,
  );
});
