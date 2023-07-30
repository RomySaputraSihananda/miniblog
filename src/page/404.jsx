import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { RandomReveal } from "react-random-reveal";

const Page404 = () => {
  useEffect(() => {
    document.title = "Page Not Found ;(";
  }, []);

  return (
    <Layout>
      <div className="grid place-items-center h-[85vh]">
        <div className="m-auto text-center">
          <h1 className="text-5xl font-Quote">
            <RandomReveal isPlaying duration={2} characters="ERROR" />
          </h1>
          <h1 className="text-[10rem] leading-[10rem] md:text-[20rem] md:leading-[20rem] font-Quote pt-4">
            <RandomReveal
              isPlaying
              duration={2.5}
              updateInterval={0.1}
              revealDuration={0.5}
              characterSet={["0", "2", "3", "4", "5", "6", "7", "8", "9"]}
              characters={["4", "0", "4"]}
            />
          </h1>
          <h1 className="text-3xl font-Quote">
            <RandomReveal
              isPlaying
              duration={2}
              characters="PAGE NOT FOUND ;("
            />
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Page404;
