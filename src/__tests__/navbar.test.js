import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('should render the navigation links correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    // Add your assertions here
  });

  it('should render the logo and year correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    // Add your assertions here
  });

  it('should render the additional icons correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    // Add your assertions here
  });

  it('should render the text "Most Animes"', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    // Add your assertions here
  });
});
