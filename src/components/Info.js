import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsArrowRight } from 'react-icons/bs';
import Navbar from './NavbarDetails';

const Details = () => {
  const data = useSelector((store) => store.anime.anime);
  const isLoading = useSelector((store) => store.anime.loading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center pl-2 pt-2 pb-2 pr-8 bg-sky-600 text-white">
        {data.posterImage?.tiny && <img src={data.posterImage?.tiny} alt={data.canonicalTitle} className="w-32 border-white border-4 rounded" />}
        <div className="flex flex-col items-end">
          <p className="font-bold text-2xl text-right uppercase">{data.canonicalTitle}</p>
          <p className="font-semibold text-lg flex items-center gap-1">
            {data.popularityRank}
            <span className="text-sm">rank</span>
          </p>
        </div>
      </div>
      <p className="pl-2 pt-1 pb-1 text-white bg-sky-800">Check more details - 2023</p>
      <ul className="bg-sky-800 text-white">

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-600">
          <p>Episodes count</p>
          <p className="flex gap-4">
            <p className="flex gap-1">
              {data.episodeCount}
              <span>episodes</span>
            </p>
            <Link to="/" className="top-2 left-38 p-1 border-2 border-white text-white rounded-full">
              <BsArrowRight className="h-5 w-5" />
            </Link>
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-800">
          <p>Episode length</p>
          <p className="flex gap-4">
            <p className="flex gap-1">
              {data.episodeLength}
              <span>minutes</span>
            </p>
            <Link to="/" className="top-2 left-38 p-1 border-2 border-white text-white rounded-full">
              <BsArrowRight className="h-5 w-5" />
            </Link>
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-600">
          <p>Date of creation</p>
          <p className="flex gap-4">
            {data && data.createdAt ? data.createdAt.slice(0, 7) : 'N/A'}
            <Link to="/" className="top-2 left-38 p-1 border-2 border-white text-white rounded-full">
              <BsArrowRight className="h-5 w-5" />
            </Link>
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-800">
          <p>Type</p>
          <p className="flex gap-4">
            {data.showType}
            <Link to="/" className="top-2 left-38 p-1 border-2 border-white text-white rounded-full">
              <BsArrowRight className="h-5 w-5" />
            </Link>
          </p>
        </li>

        <li className="h-32 pl-2 pr-2 text-lg bg-sky-600 flex justify-between items-center">
          <p>
            First appearance
          </p>
          <p className="flex gap-4">
            {data.tba ? <span>{data.tba}</span> : 'N/A'}
            <Link to="/" className="top-2 left-38 p-1 border-2 border-white text-white rounded-full">
              <BsArrowRight className="h-5 w-5" />
            </Link>
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-800">
          <p>Totoal length</p>
          <p className="flex gap-4">
            <p className="flex gap-1">
              {data.totalLength}
              <span>episodes</span>
            </p>
            <Link to="/" className="top-2 left-38 p-1 border-2 border-white text-white rounded-full">
              <BsArrowRight className="h-5 w-5" />
            </Link>
          </p>
        </li>

        <li className="h-32 flex justify-between items-center pl-2 pr-2 text-lg bg-sky-600">
          <p>subtype</p>
          <p className="flex gap-4">
            {data.subtype}
            <Link to="/" className="top-2 left-38 p-1 border-2 border-white text-white rounded-full">
              <BsArrowRight className="h-5 w-5" />
            </Link>
          </p>
        </li>
      </ul>
      <footer className="text-sky-700 h-16 bg-white flex gap-1 items-center justify-center">
        Built by
        <a href="https://www.linkedin.com/in/otmaneechchafyky/" className="underline text-sky-500">Otmane Echch</a>
        & Designed by
        <a href="https://www.behance.net/sakwadesignstudio" className="underline text-sky-500">Nelson Sakwa</a>
      </footer>
    </div>
  );
};

export default Details;
