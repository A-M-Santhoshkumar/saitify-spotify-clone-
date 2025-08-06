import React, { useRef } from 'react';
import { albumsData, songsData } from '../assets/assets';
import AlbumItems from './AlbumItems';
import Navbar from './Navbar';
import SongItems from './SongItems';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function DisplayHome() {
  const scrollRefOne = useRef(null); // Top Playlist
  const scrollRefTwo = useRef(null); // Recently Played

  const scroll = (ref, direction) => {
    if (ref.current) {
      const amount = 300;
      ref.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Navbar />

      {/* Top Playlist Section */}
      <div className='mb-4 relative group'>
        <h1 className='my-5 font-bold text-2xl'>Your Top Playlist</h1>

        {/* Scroll Buttons */}
        <div className='absolute left-0 right-0 top-36 z-10 hidden md:flex justify-between px-6 group-hover:flex'>
          <button
            onClick={() => scroll(scrollRefOne, 'left')}
            className='bg-gray-800 rounded-full p-3 hover:bg-gray-600'
          >
            <FaChevronLeft fontSize={15} />
          </button>
          <button
            onClick={() => scroll(scrollRefOne, 'right')}
            className='bg-gray-800 rounded-full p-3 hover:bg-gray-600'
          >
            <FaChevronRight fontSize={15} />
          </button>
        </div>

        {/* Scrollable Playlist */}
        <div
          ref={scrollRefOne}
          className='flex overflow-x-auto'
        >
          {albumsData.map((item, index) => (
            <div key={index} className='inline-block'>
              <AlbumItems {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Recently Played Section */}
      <div className='mb-4 relative group'>
        <h1 className='my-5 font-bold text-2xl'>Recently Played</h1>

        {/* Scroll Buttons */}
        <div className='absolute left-0 right-0 top-36 z-10 hidden md:flex justify-between px-6 group-hover:flex'>
          <button
            onClick={() => scroll(scrollRefTwo, 'left')}
            className='bg-gray-800 rounded-full p-3 hover:bg-gray-600'
          >
            <FaChevronLeft fontSize={15} />
          </button>
          <button
            onClick={() => scroll(scrollRefTwo, 'right')}
            className='bg-gray-800 rounded-full p-3 hover:bg-gray-600'
          >
            <FaChevronRight fontSize={15} />
          </button>
        </div>

        {/* Scrollable Recently Played */}
        <div
          ref={scrollRefTwo}
          className='flex overflow-x-auto'
        >
          {songsData.map((item, index) => (
            <div key={index} className='inline-block'>
              <SongItems {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
