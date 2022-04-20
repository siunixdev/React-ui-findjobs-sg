import React from 'react'

function Body() {

  let companies = [
    {
      "name": "Seacare",
      "logo": "/images/logo/seacare.png",
    },
    {
      "name": "UEMS",
      "logo": "/images/logo/uems.png",
    },
    {
      "name": "SMRT",
      "logo": "/images/logo/smrt.png",
    },
    {
      "name": "PAP Community Foundation",
      "logo": "/images/logo/pap.png",
    },
  ]

  return (
    <div>
      <div className='container mx-auto flex items-center justify-center px-0 md:px-10 lg:px-20 xl:px-40'>
        <div className='w-full relative shadow-xl'>
          <div className='bg-stone-600 h-10 rounded-t-md'></div>
          <div className='relative bg-rose-50 h-72 w-full flex flex-col justify-center items-center space-y-4'>
            <img
              className='hidden xl:block absolute w-44 inset-0 top-10 left-20'
              src='/images/Humaaans1.png' />
            <img
              className='hidden xl:block absolute w-44 right-20 bottom-10'
              src='/images/Humaaans2.png' />
            <span className='font-bold text-4xl text-slate-700'>NECDC Physical Career Fair</span>
            <span className='font-bold text-3xl text-slate-700'>@ Our Tempines Hub</span>
            <button
              className='bg-red-400 py-3 px-5 rounded-md font-semibold text-xl text-white hover:bg-red-500'
            >Register Now</button>
          </div>
          <div className='bg-rose-400 h-14'></div>
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-3 gap-x-8 px-0 md:px-10 lg:px-20 xl:px-40'>
        {
          companies.map((data, i) => {
            if (i % 2 == 0) {
              return (
                <>
                  <div className='w-full my-10'>
                    <div className='space-y-16'>
                      <div className='w-full'>
                        <div className='relative w-full bg-orange-300 h-14 rounded-md'>
                          <div className='absolute w-full flex justify-center items-center bg-orange-100 h-14 rounded-md shadow-lg -bottom-4 border border-orange-300'>
                            <span className='text-xl font-bold'>BOOTH {++i}</span>
                          </div>
                        </div>
                        <div className='flex justify-center items-center space-x-14 md:space-x-20 xl:space-x-32'>
                          <div className='w-4 md:w-8 xl:w-10 h-10 bg-black'></div>
                          <div className='w-4 md:w-8 xl:w-10 h-10 bg-black'></div>
                        </div>
                        <div className='relative w-full bg-orange-200 h-32 md:h-44 lg:h-60 xl:h-72 rounded-md'>
                          <div className='absolute w-full flex flex-col justify-center items-center bg-orange-100 h-32 md:h-44 lg:h-60 xl:h-72 rounded-md shadow-lg -bottom-4 border border-orange-200 space-y-4'>
                            <img src={data.logo} className="rounded-full object-cover object-center w-32 h-32 bg-white" />
                            <span>{data.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full h-full bg-rose-300'>
                    <div className='h-full bg-red-400 mx-4'>

                    </div>
                  </div>
                </>
              )
            } else {
              return (
                <div className='w-full mt-10'>
                  <div className='w-full'>
                    <div className='relative w-full bg-orange-300 h-14 rounded-md'>
                      <div className='absolute w-full flex justify-center items-center bg-orange-100 h-14 rounded-md shadow-lg -bottom-4 border border-orange-300'>
                        <span className='text-xl font-bold'>BOOTH {++i}</span>
                      </div>
                    </div>
                    <div className='flex justify-center items-center space-x-14 md:space-x-20 xl:space-x-32'>
                      <div className='w-4 md:w-8 xl:w-10 h-10 bg-black'></div>
                      <div className='w-4 md:w-8 xl:w-10 h-10 bg-black'></div>
                    </div>
                    <div className='relative w-full bg-orange-200 h-32 md:h-44 lg:h-60 xl:h-72 rounded-md'>
                      <div className='absolute w-full flex flex-col justify-center items-center bg-orange-100 h-32 md:h-44 lg:h-60 xl:h-72 rounded-md shadow-lg -bottom-4 border border-orange-200 space-y-4'>
                        <img src={data.logo} className="rounded-full object-cover object-center w-32 h-32 bg-white" />
                        <span>{data.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </div >
  )
}

export default Body