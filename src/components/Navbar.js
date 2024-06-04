import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between  px-2 sm:px-8 py-4 text-sm sm:text-md bg-green-500 font-semibold sm:font-bold ">
      <div>
        <h1 className=" text-xl sm:text-3xl text-white">Library</h1>
      </div>
      <div>
        <ul className="flex gap-4 md:gap-10 items-center">
          <Link to="/">
            <li className=" p-1 sm:p-2 bg-white rounded-lg hover:bg-slate-200 ">
              <button>Book Search</button>
            </li>
          </Link>
          <Link to="/Bookshelf">
            <li className="p-1 sm:p-2 bg-white rounded-lg hover:bg-slate-200">
              <button>My Book Shelf</button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
