import React from 'react'
import { Link } from 'react-router-dom'
import {
  UserIcon
} from '@heroicons/react/outline'

function Navbar() {
  return (
    <div className='bg-white'>
      <div className='container mx-auto py-4 flex items-center justify-between'>
        <div className='flex items-center justify-center'>
          <img
            src='images/logo.png'
            className='w-32'
          />
        </div>
        <div className='flex items-center justify-center space-x-8'>
          <Link
            to="browse-jobs"
            className='font-medium text-gray-500 hover:text-gray-800'
          >Browse Jobs</Link>
          <Link
            to="my-applied"
            className='font-medium text-gray-500 hover:text-gray-800'
          >My Applied</Link>
          <Link
            to="about-us"
            className='font-medium text-gray-500 hover:text-gray-800'
          >About Us</Link>
        </div>
        <div className='flex items-center justify-center'>
          <span className='mr-2'>Hi, Abdillah</span>
          <div className='bg-gray-600 text-white p-2 rounded-full'>
            <UserIcon className='w-5' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar