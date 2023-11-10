import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import rei from "./../assets/img/rei.jpg";
import { useEffect } from "react";

const style = {
  paragraph:
    "px-1 md:px-3 xl:px-5 font-light tracking-wide text-[0.6rem] leading-relaxed text-center md:text-[0.9rem]",
};

const About = () => {
  useEffect(() => {
    document.title = "about page | romys";
  }, []);

  return (
    <Layout>
      <div className="text-center h-[85vh] grid place-items-center p-8 w-[98wh]">
        <div className="grid rounded-xl h-[100%] md:h-[80%] w-[100%] md:w-[70%] xl:w-[80%] shadow-2xl shadow-black grid-cols-1 md:grid-cols-2">
          <div className="h-[100%]">
            <Link
              to="https://en.wikipedia.org/wiki/Rei_Ayanami"
              target="_blank"
            >
              <img
                src={rei}
                alt={rei}
                className="opacity-90 rounded-xl brightness-95 h-[100%] object-cover shadow-sm shadow-black hover:blur-lg transition"
              />
            </Link>
          </div>
          <div className="p-6 flex flex-col justify-evenly">
            <h1 className="text-bold text-3xl md:text-4xl xl:text-8xl font-Quote">
              ABOUT PAGE
            </h1>
            <p className={style.paragraph}>
              Website ini dibuat dengan penuh kekurangan, namun dengan harapan
              dapat memberikan manfaat dan informasi bermanfaat bagi
              pengunjungnya.
            </p>
            <p className={style.paragraph}>
              Saya menyadari bahwa masih banyak hal yang perlu diperbaiki dan
              ditingkatkan untuk memberikan pengalaman terbaik bagi para
              pengguna. Semangat untuk terus belajar dan mengembangkan kemampuan
              demi membuat website yang semakin baik di masa depan.Saya juga
              terbuka untuk menerima masukan dan kritik yang membangun guna
              meningkatkan kualitas dan kegunaan dari website ini.
            </p>
            <p className={style.paragraph}>
              Terima kasih atas kesempatan untuk belajar dan tumbuh bersama
              melalui proyek ini.
            </p>
            <Link
              to="/materi"
              className="inline-flex self-center mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white shadow-sm shadow-black rounded-lg hover:bg-gray-600 transition"
            >
              materi
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
    </Layout>
  );
};
export default About;
