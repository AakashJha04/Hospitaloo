import React from 'react'
import contact_us_img from '../assets/assets_frontend/contact_image.png'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
      <img className='w-full md:max-w-[360px]' src={contact_us_img} alt=''/>
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-lg text-color-600'>OUR HOSPITAL</p>
        <p className='text-gray-500'>ekvjenvjnvenvjenvenvenkv</p>
        <p className='text-gray-500'>Tel: +91-44e1341414</p>
        <p className='text-gray-500'>dwfkjfw@gmai.com</p>
        <p className='font-semibold text-lg text-gray-600'>know more about us and jobs opening</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
      </div>

    </div>
  )
}

export default Contact
