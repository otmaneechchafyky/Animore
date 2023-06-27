import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './NavbarDetails';

const Details = () => {
  const data = useSelector((store) => store.anime.anime);

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center pl-2 pt-2 pb-2 pr-8 bg-sky-600 text-white">
        <img src={data.posterImage?.tiny} alt={data.canonicalTitle} className="w-32 border-white border-4 rounded" />
        <div className="flex flex-col items-end">
          <p className="font-bold text-2xl text-right">{data.canonicalTitle}</p>
          <p className="font-semibold flex flex gap-1">
            {data.popularityRank}
            <span>Rank</span>
          </p>
        </div>
      </div>
      <p className="pl-2 pt-1 pb-1 text-white bg-sky-800">Check more details - 2023</p>
      <ul className="bg-sky-800 text-white">

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-600">
          <p>Episodes count</p>
          <p className="flex gap-1">
            {data.episodeCount}
            <span>episodes</span>
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-800">
          <p>Episode length</p>
          <p className="flex gap-1">
            {data.episodeLength}
            <span>minutes</span>
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-600">
          <p>Date of creation</p>
          <p className="flex gap-1">
            {data && data.createdAt ? data.createdAt.slice(0, 7) : 'N/A'}
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-800">
          <p>Type</p>
          <p className="flex gap-1">
            {data.showType}
          </p>
        </li>

        <li className="h-32 pl-2 pr-2 text-lg bg-sky-600 flex justify-between items-center">
          <p>
            First appearance
          </p>
          <p className="flex gap-1">
            {data.tba ? <span>{data.tba}</span> : 'N/A'}
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-800">
          <p>Totoal length</p>
          <p className="flex gap-1">
            {data.totalLength}
            <span>episodes</span>
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-600">
          <p>subtype</p>
          <p className="flex gap-1">
            {data.subtype}
          </p>
        </li>
      </ul>
      <footer className="text-sky-700 h-16 bg-white flex items-center justify-center">
        Built by Otmane & Designed by Nelson Sakwa
      </footer>
    </div>
  );
};

export default Details;
