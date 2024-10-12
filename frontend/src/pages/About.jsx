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
          <h3>Welcome to Hospitallo, where compassion meets excellence in healthcare. We are dedicated to providing comprehensive medical services with a patient-first approach, ensuring that every individual receives personalized care in a comfortable and supportive environment.</h3>
          
          <b className='text-gray-800'>Our Mission</b>
          <p>
          At Hospitallo, our mission is to deliver high-quality healthcare that focuses on improving the well-being of our community. We strive to combine advanced medical technology with a caring team of professionals to offer effective treatments and exceptional care.
          </p>

          <b className='text-gray-800'> Our Vision</b>
          <p>
          We envision becoming a leading healthcare institution recognized for our unwavering commitment to patient safety, medical excellence, and innovation. By continuously evolving and adapting to the latest medical advancements, we aim to set new standards in healthcare delivery.
          </p>
          
        </div>
      </div>

      <div className='text-xl my-4'>
        <p> WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      {/* Updated 'Why Choose Us' section */}
      <div className='flex flex-col md:flex-row mb-20 justify-center items-center gap-4'> 
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] bg-white text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 text-center cursor-pointer'>
          <b>Efficiency:</b>
          <p>We are committed to providing timely and accurate healthcare services that optimize efficiency in every aspect of patient care.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] bg-white text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 text-center cursor-pointer'>
          <b>Convenience:</b>
          <p>Our services are designed with your convenience in mind, offering easy access to care and comprehensive healthcare solutions.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] bg-white text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 text-center cursor-pointer'>
          <b>Personalization:</b>
          <p>At Hospitallo, every patient receives personalized care tailored to their individual health needs and preferences.</p>
        </div> 
      </div>
    </div>
  )
}

export default About
