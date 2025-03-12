import react from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[url('/images/footer-bg.webp')] bg-cover bg-center text-gray-900 pt-20 pb-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column - Branding & Contact */}
        <div className='rounded-2xl p-8 '>
          <div className="flex items-center">
            <div className="text-white">
            <img src="images/transpeedogo.webp" className='w-[180px]'></img>
            </div>  
          </div>
          <h2 className="text-lg text-yellow-500 font-bold mt-4">Transpeed Cargo Pvt. Ltd.</h2>
          <p className="text-md text-white"><strong>Office Adress:</strong> AD - 7E, Pitampura, Delhi 110034</p>
          <p className="text-md text-white"><strong>Registered Address:</strong> K-18, 1st Floor, Navin Shahdara, Delhi 110032</p>
          <p className="text-md mt-2 text-white">Email: <a href="mailto:contact@transpeed.in" className="text-[#fff] font-bold">contact@transpeed.in</a></p>
          <p className="text-md text-white">Call: <a href="tel:+919354382988" className="text-[#fff] font-bold">+91 9354382988</a></p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-100">
            <FaFacebookF className="cursor-pointer text-2xl bg-[#01385e] w-[30px] h-[30px] p-2 hover:text-yellow-500 rounded-full" />
            <FaLinkedinIn className="cursor-pointer text-2xl bg-[#01385e] w-[30px] h-[30px] p-2 hover:text-yellow-500 rounded-full" />
            <FaInstagram className="cursor-pointe text-2xl bg-[#01385e] w-[30px] h-[30px] p-2 hover:text-yellow-500 rounded-full" />
            <FaXTwitter className="cursor-pointer text-2xl bg-[#01385e] w-[30px] h-[30px] p-2 hover:text-yellow-500 rounded-full" />
          </div>
        </div>

        {/* Portfolio Section */}
        <div className='rounded-2xl p-8'>
          <h3 className="font-bold text-yellow-400 text-2xl">Useful Link</h3>
          <ul className="text-md mt-2 space-y-1 text-white">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Global Privilege</li>
            <li>Contact Us</li>
            <li>Gallery</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Finance Section */}
        <div className='rounded-2xl p-8'>
          <h3 className="font-bold text-yellow-400 text-2xl">Logistics Services</h3>
          <ul className="text-md mt-2 space-y-1 text-white">
            <li>Air Freight</li>
            <li>SEA Freight</li>
            <li>Road Transportation</li>
            <li>Warehousing</li>
            <li>Custom Clearence</li>
            <li>Rail Transport</li>
          </ul>
        </div>

        {/* Operations Section */}
        <div className='rounded-2xl p-8'>
          <h3 className="font-bold text-yellow-400 text-2xl">Support</h3>
          <ul className="text-md mt-2 space-y-1 text-white">
            <li>Privacy Policy</li>
            <li>Term & Condition</li>
            <li>Book An Appointment</li>
            <li>Support</li>
            <li>Blog</li>

          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t-2 border-gray-100 mt-8 pt-4 text-center text-sm text-gray-100">
        <p>Copyright © 2025. Transpeed Cargo Pvt. Ltd. | All Rights Reserved. | Manage By Hover Business Servicess LLP.</p>
      </div>
    </footer>
  );
}
