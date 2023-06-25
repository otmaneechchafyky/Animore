import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime } from '../redux/anime/AnimeSlice';
import '../App.css';

const AnimeCard = () => {
  const dispatch = useDispatch();
  const total = useSelector((store) => store.anime.totalEpisodes);

  const categories = [
    'Action',
    'Adventure',
    'Comedy',
    'Dementia',
    'Drama',
    'Fantasy',
    'Historical',
    'Horror',
    'Josei',
    'Kids',
    'Magic',
    'Martial Arts',
    'Mecha',
    'Military',
    'Music',
    'Mystery',
    'Parody',
    'Psychological',
    'Romance',
    'Samurai',
    'School',
    'Seinen',
  ];
  return (
    <div>
      {categories.map((category) => (
        <NavLink key={category} to="Details">
          <button type="button" onClick={() => { dispatch(fetchAnime(category)); }}>
            {category}
            {' '}
            <strong>{total}</strong>
          </button>
        </NavLink>

      ))}
    </div>
  );
};

export default AnimeCard;
