import React from 'react'
import contact_us_img from '../assets/assets_frontend/contact_image.png'

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* Main Content Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        {/* Contact Image */}
        <img className='w-full md:max-w-[360px]' src={contact_us_img} alt='Contact Us' />

        {/* Contact Information */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR HOSPITAL</p>
          <p className='text-gray-500'>
            Hospitallo is dedicated to providing excellent medical care to our community. Visit us for your healthcare needs.
          </p>
          <p className='text-gray-500'>Tel: +91-44-1234-1414</p>
          <p className='text-gray-500'>Email: contact@hospitallo.com</p>

          {/* Jobs Information */}
          <p className='font-semibold text-lg text-gray-600'>
            Know more about us and explore job openings
          </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
