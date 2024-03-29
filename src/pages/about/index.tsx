import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-screen pt-32 pb-16 box-content text-center text-3xl text-gray-400 bg-gray-100">
      <h1>ABOUTページ</h1>
      <Link to="/">
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="py-16 w-9/12 shadow-lg rounded-lg bg-white">
              <h2 className="">TOP</h2>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-10">
        <div className="flex justify-center">
          <div className="py-16 w-9/12 shadow-lg rounded-lg bg-white">
            <h2 className="">TEST</h2>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center">
          <div className="py-16 w-9/12 shadow-lg rounded-lg bg-white">
            <h2 className="">TEST</h2>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center">
          <div className="py-16 w-9/12 shadow-lg rounded-lg bg-white">
            <h2 className="">TEST</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
