import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

function Display() {
  const displayRef = useRef();
  const locationDD = useLocation();
  const isAlbum = locationDD.pathname.includes('album');
  const albumId = isAlbum ? locationDD.pathname.split('/').pop() : "";
  const album = albumsData[Number(albumId)];
  const bgclr = album ? album.bgColor : "#121212";

  useEffect(() => {
    if (isAlbum && album) {
      displayRef.current.style.backgroundImage = `linear-gradient(${bgclr}, #121212)`;
      displayRef.current.style.backgroundColor = "";
    } else {
      displayRef.current.style.backgroundImage = "none";
      displayRef.current.style.backgroundColor = "#121212";
    }
  }, [locationDD.pathname]);

  return (
    <div
      ref={displayRef}
      className='w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
