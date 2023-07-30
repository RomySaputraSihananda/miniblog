import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { RandomReveal } from "react-random-reveal";
import { Link } from "react-router-dom";
import randomQuotes from "./../components/randomQuotes";

const Home = () => {
  const [pople, setPople] = useState("");

  useEffect(() => {
    document.title = "Home";
    setPople(randomQuotes());
  }, []);

  return (
    <Layout>
      <div className="h-[85vh] grid place-items-center w-full m-auto">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-5 md:grid-rows-1 md:gap-4 w-[100%] h-[100%] relative">
          <Link
            to={pople.wiki}
            target="_blank"
            className="grid justify-items-center items-end"
          >
            <img
              src={pople.image}
              alt={pople.image}
              className="md:col-span-2 brightness-75 grayscale md:absolute md:left-0 md:bottom-0 h-[40%] md:h-[80%] rounded-e-xl drop-shadow-[0_0_10px_rgba(1, 183, 250, 0.3)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] transition"
            />
          </Link>
          <div className="md:col-span-3 md:col-start-3 grid justify-items-center items-start md:place-items-center p-5 md:p-10">
            <div>
              <h1 className="font-Quote text-center text-2xl w-fullmd:pt-0 md:text-7xl pb-3 md:pb-10">
                {pople.quote}
              </h1>
              <p className="font-Quote text-center w-full md:pt-0 md:font-semibold text-lg md:text-2xl tracking-wide">
                <RandomReveal
                  isPlaying
                  duration={1}
                  characters={`- ${pople.name} -`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
