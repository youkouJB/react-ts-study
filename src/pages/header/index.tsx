import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full z-10 bg-white shadow-lg">
      <Link to="/">
        <div className="py-6 text-center text-gray-400">
          <h1 className="text-3xl">header</h1>
        </div>
      </Link>
    </header>
  )
}

export default Header;
