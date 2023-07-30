import { useState } from "react";
import { Link } from "react-router-dom";
import { RandomReveal } from "react-random-reveal";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className="border-gray-300 border-b">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4 md:py-3 md:px-6 xl:py-4 xl:px-8">
        <Link to="/" className="flex items-center">
          <span className="font-Salt text-4xl">
            Romy{" "}
            <span>
              <RandomReveal
                isPlaying={true}
                duration={Infinity}
                revealDuration={0}
                updateInterval={0.5}
                characterSet={[": (", ": (", "; )", "; ("]}
                characters=" "
              />
            </span>
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={() => setClick(!click)}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            !click
              ? "hidden w-full md:block md:w-auto"
              : "w-full md:block md:w-auto py-2"
          }
          id="navbar-solid-bg"
        >
          <ul className="border flex flex-col font-medium mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-react md:p-0 dark:text-white md:dark:hover:text-blue-react dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-react md:p-0 dark:text-white md:dark:hover:text-blue-react dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/materi"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-react md:p-0 dark:text-white md:dark:hover:text-blue-react dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Materi
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-react md:p-0 dark:text-white md:dark:hover:text-blue-react dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
