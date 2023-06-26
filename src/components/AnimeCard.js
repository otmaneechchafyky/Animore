import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime } from '../redux/anime/AnimeSlice';
import '../App.css';

const AnimeCard = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((store) => store.anime.animeList);

  useEffect(() => {
    dispatch(fetchAnime('Action,Comedy'));
  }, [dispatch]);

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
      <div>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => {
              dispatch(fetchAnime(category));
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <ul>
        {animeList.map((anime) => (
          <div key={anime.id}>
            <img
              src={anime.posterImage.tiny}
              alt={anime.canonicalTitle}
              className="anime-image"
            />
            <li>{anime.canonicalTitle}</li>
            <span>{anime.popularityRank}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AnimeCard;
