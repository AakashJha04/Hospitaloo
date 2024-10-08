import React from 'react'
import about_image from '../assets/assets_frontend/about_image.png'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 '>
        <img className='w-full md:max-w-[360px]' src={about_image} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Hospitallo the portal to book Best Doctors</p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <b className='text-gray-800'> Our Vision</b>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p> WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary text-white transition-all duration-300 text-gray cursor-pointer'>
       <b>Efficiency:</b>
       <p> jnwqvnefnjfjknfjnwqvnefnjfjknf </p>
       </div>

       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary text-white transition-all duration-300 text-gray cursor-pointer'>
       <b>Convenience:</b>
       <p> jnwqvnefnjfjknf jnwqvnefnjfjknf</p>
       </div>

       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary text-white transition-all duration-300 text-gray cursor-pointer'>
       <b>Personalization:</b>
       <p> jnwqvnefnjfjknfjnwqvnefnjfjknf </p>
       </div>

      </div>
    </div>
  )
}

export default About
