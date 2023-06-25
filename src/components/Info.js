import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const list = useSelector((store) => store.anime.animeList);
  return (
    <div>
      <ul>
        {
        list.map((anime) => (
          <div key={anime.id}>
            <img src={anime.posterImage.tiny} alt={anime.canonicalTitle} className="anime-image" />
            <li>
              {anime.canonicalTitle}
            </li>
          </div>
        ))
      }
      </ul>
    </div>
  );
};

export default Details;
