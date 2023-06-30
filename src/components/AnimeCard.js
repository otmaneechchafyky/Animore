import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@material-tailwind/react';
import Navbar from './Navbar';
import { fetchAnime, fetchAnimeById } from '../redux/anime/AnimeSlice';
import '../App.css';

const AnimeCard = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((store) => store.anime.animeList);
  const isLoading = useSelector((store) => store.anime.loading);

  useEffect(() => {
    dispatch(fetchAnime('Action,Comedy'));
  }, [dispatch]);

  const categories = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Fantasy',
    'Historical',
    'Horror',
    'Kids',
    'Martial Arts',
    'Military',
    'Music',
    'Mystery',
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        <Spinner className="h-12 w-12 text-sky-700" />
      </div>
    );
  }

  return (
    <div className="font-gill">
      <Navbar />
      <div>
        <div className="bg-gradient-to-b from-sky-500 to-sky-700 p-4 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6 text-white">
          {categories.map((category) => (
            <button
              className="p-1 border-2 border-white ease-in rounded-md hover:text-sky-700 hover:bg-white"
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
        <p className="text-white bg-sky-800 p-1 font-lato">Anime by Category</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {animeList.map((anime) => (
            <li key={anime.id} className="relative odd:bg-sky-700 even:bg-sky-600 text-white">
              <img
                src={anime.posterImage.tiny}
                alt={anime.canonicalTitle}
                className="w-64 md:w-72"
              />
              <div className="p-2 flex flex-col items-end">
                <Link to="Details" className="absolute top-2 left-38 p-2 font-bold bg-white text-sky-600 rounded-full hover:bg-sky-600 hover:text-white">
                  <BsArrowRight onClick={() => { dispatch(fetchAnimeById(anime.id)); }} className="h-6 w-6" />
                </Link>
                <h1 className="font-bold text-2xl uppercase">{anime.canonicalTitle.slice(0, 7)}</h1>
                <p className="flex gap-1">
                  {anime.popularityRank}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer className="text-sky-700 h-16 bg-white flex gap-1 items-center justify-center">
        Built by
        <a href="https://www.linkedin.com/in/otmaneechchafyky/" className="underline text-sky-500">Otmane Echch</a>
        & Designed by
        <a href="https://www.behance.net/sakwadesignstudio" className="underline text-sky-500">Nelson Sakwa</a>
      </footer>
    </div>
  );
};

export default AnimeCard;
