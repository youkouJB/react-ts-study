import React from 'react'
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="h-screen pt-32 pb-16 box-content text-center text-3xl text-gray-400 bg-gray-100">
      <h1>TOPページ</h1>
      <Link to="/about">
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="py-16 w-9/12 shadow-lg rounded-lg bg-white transition duration-300 hover:bg-blue-100 hover:text-white">
              <h2 className="">ABOUT</h2>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/count">
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="py-16 w-9/12 shadow-lg rounded-lg bg-white transition duration-300 hover:bg-pink-100 hover:text-white">
              <h2 className="">COUNT</h2>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/test">
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="py-16 w-9/12 shadow-lg rounded-lg bg-white transition duration-300 hover:bg-yellow-100 hover:text-white">
              <h2 className="">TEST</h2>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/todo">
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="py-16 w-9/12 shadow-lg rounded-lg bg-white transition duration-300 hover:bg-green-100 hover:text-white">
              <h2 className="">TODO</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Top;
