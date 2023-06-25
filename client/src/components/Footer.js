import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#282A3A]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold">About Us</h3>
            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-gray-300">Address:</span> Ranchi Jharkhand
              </li>
              <li>
                <span className="text-gray-300">Phone:</span> +91 8989898989
              </li>
              <li>
                <span className="text-gray-300">Email:</span> btech10105.21@bitmesra.ac.in
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/home" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/login" className="text-gray-300 hover:text-white">Login</a>
              </li>
              <li>
                <a href="/register" className="text-gray-300 hover:text-white">Register</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold">Social</h3>
            <ul className="mt-4 flex space-x-4">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <img className='h-6 w-6' src="/facebook.svg" alt="fb" />
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <img className='h-6 w-6' src="/facebook.svg" alt="fb" />
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <img className='h-6 w-6' src="/facebook.svg" alt="fb" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-300">
            &copy; {new Date().getFullYear()} Easy Home. All rights reserved.
          </p>
          <p className="mt-4 text-base text-gray-300">
            Made with <span className="text-red-500">&hearts;</span> by Prateek
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
