const Scroolup = () => {
  const up = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <span
      onClick={() => up()}
      className="fixed left-[18.7rem] bottom-16 cursor-pointer w-fit h-fit shadow-lg shadow-black rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 16 16"
        className="fill-[#eaeaea] hover:fill-blue-react"
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
        />{" "}
      </svg>
    </span>
  );
};

export default Scroolup;
