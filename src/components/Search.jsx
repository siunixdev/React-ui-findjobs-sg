import React from 'react'
import {
  SearchIcon,
  ViewGridIcon,
  FilterIcon,
  LinkIcon
} from '@heroicons/react/outline'

function Search() {
  return (
    <div>      <div className='container mx-auto py-4'>
      <div className='flex items-center space-x-8'>
        <div className='flex items-center w-full space-x-4'>
          <div className='flex items-center w-full'>
            <SearchIcon
              className='absolute w-5 ml-4 text-red-400'
            />
            <input
              className='w-full py-4 px-14 rounded-md focus:outline-none'
            />
          </div>
          <button
            className='bg-white p-5 rounded-md hover:bg-gray-100'
          >
            <ViewGridIcon
              className='w-4'
            />
          </button>
          <button
            className='bg-white p-5 rounded-md hover:bg-gray-100'
          >
            <FilterIcon
              className='w-4'
            />
          </button>
          <button
            className='bg-white p-5 rounded-md hover:bg-gray-100'
          >
            <LinkIcon
              className='w-4'
            />
          </button>
        </div>
      </div>
    </div></div>
  )
}

export default Search