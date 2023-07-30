import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="max-w-xs rounded-lg shadow-2xl shadow-black ">
      <Link to={props.name}>
        <img className="rounded-t-lg" src={props.img} alt="" />
      </Link>
      <div className="p-2 md:p-5">
        <Link to={props.name}>
          <h5 className="mb-4 text-xs md:text-md xl:text-lg font-bold tracking-tight text-white">
            {props.title}
          </h5>
        </Link>

        <p className="mb-3 font-normal text-[0.5rem] md:text-sm text-gray-400 line-clamp-3">
          {props.prev}
        </p>
        <div className="grid place-items-center">
          <Link
            to={props.name}
            className="inline-flex shadow-sm shadow-black items-center px-2 py-1 md:px-3 md:py-2 text-[0.6rem] md:text-sm font-medium text-center text-white  rounded-lg hover:bg-gray-600 transition"
          >
            Detail
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
