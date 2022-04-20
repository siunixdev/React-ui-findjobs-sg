import React from 'react'

function Footer() {

  let copyright = `${new Date().getFullYear()} Findjobs Pte Ltd | All right reserved`

  return (
    <div className='static bottom-0 bg-white w-full py-2 text-center z-50'>
      &copy; {copyright}
    </div>
  )
}

export default Footer