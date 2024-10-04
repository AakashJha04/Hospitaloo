import React from "react";
import hospitaloImage from "../../public/HOSPI.png";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-5 w-40" src={hospitaloImage} alt="" />
        </div>

        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-9999999993</li>
            <li>hospitallo@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright text */}
      <div className="flex flex-col items-center mt-10">
        <hr className="w-full mb-5" />
        <p className="py-5 text-sm text-center">
          copyright 2024@ Hospitallo - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
