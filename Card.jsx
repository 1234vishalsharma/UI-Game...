import React from 'react'

const Card = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-center items-center'>
      {/* card one */}
      <div className='flex flex-col gap-2'>
          <h2 className='text-center text-2xl text-gray-700 font-bold'>Card one</h2>
          <div className='h-96 w-80 bg-gray-600 rounded-2xl border-black cursor-pointer overflow-hidden'>
              <h2 className='text-center p-2 font-semibold text-xl text-white'>Card Title</h2>

              <div className='w-full h-64 mt-4'>
                  <img className='h-full w-full object-cover overflow-hidden' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
              </div>

              <p className='text-center mt-4 text-white'>Some Details to the card</p>
          </div>
      </div>
      {/* card two */}
      <div className='flex flex-col gap-2'>
          <h2 className='text-center text-2xl text-gray-700 font-bold'>Card two</h2>
          <div className='h-96 w-80 bg-transparent rounded-lg bg-slate-300 border-black border cursor-pointer overflow-hidden'>
            <h2 className='text-center p-2 font-semibold text-xl text-gray-500'>Card Title</h2>

            <div className='w-full h-64 mt-4'>
                <img className='h-full w-full object-cover overflow-hidden' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
            </div>

            <p className='text-center mt-4 text-gray-500'>Some Details to the card</p>
          </div>
      </div>

      {/* Card three */}
      <div className='flex flex-col gap-2'>
        <h2 className='text-center text-2xl text-gray-700 font-bold'>Card three</h2>
        <div className='h-96 w-80 bg-gray-600 rounded-2xl border-black cursor-pointer overflow-hidden'>

          <div className='w-full h-64 overflow-hidden'>
              <img className='h-full w-full object-cover' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
          </div>
          <h2 className='p-2 font-semibold text-2xl text-white'>Card Title</h2>

          <p className='p-2 text-white'>Some Details to the card</p>
        </div>
      </div>
      {/* Card Fourth */}
      <div className='flex flex-col gap-2'>
        <h2 className='text-center text-2xl text-gray-700 font-bold'>Card fourth</h2>
        <div className='relative h-96 w-80 bg-gray-600 rounded-2xl border-black cursor-pointer overflow-hidden group'>

          <img className='z-0  absolute h-full w-full object-cover' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
          
          <div className='-bottom-20 pl-4  absolute group-hover:-translate-y-28  group-hover:visible duration-200 ease-in-out'>

              <h2 className='p-2 font-semibold text-2xl text-black'>Card Title</h2>
              <p className='text-center p-2 text-black'>Some Details to the card</p>
          
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card
