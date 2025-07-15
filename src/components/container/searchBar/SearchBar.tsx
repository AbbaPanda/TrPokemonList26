import React from 'react';

const SearchBar:React.FC = () => {
  return (
    <div className='h-[48px] w-[361px] mt-4 text-neutral-500 bg-white rounded-full flex items-center justify-between px-4'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search Pokemon'
      />
      <button className='w-7 h-7 rounded-full bg-[#3663AD] flex justify-center items-center p-1'>
        <img src='./public/icons/search.png' alt='s' />
      </button>
    </div>
  );
};

export default SearchBar;
