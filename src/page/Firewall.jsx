import Layout from "../components/layout/Layout";
import {
  Fungsi,
  Jenis,
  Kesimpulan,
  Konfigurasi,
  Pendahuluan,
  Pengertian,
} from "../components/firewall/init";
import { useEffect, useState } from "react";
import Scroolup from "./../components/Scroolup";
import NavMateri from "../components/layout/NavMateri";

const Firewall = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    document.title =
      "Memahami Firewall dan Pentingnya Keamanan Jaringan | romys";
    const handleScroll = () => {
      setHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <div className="w-full grid grid-cols-6 grid-rows-1 gap-0 ">
        <div className="col-span-2 md:col-span-1 sticky top-0 grid h-screen place-items-center w-full ">
          <NavMateri />
        </div>
        <div
          id="Materi"
          className="col-span-4 col-start-3 md:col-span-5 w-[90%] md:w-[90%] m-auto p-5 pb-28 rounded-lg shadow-xl shadow-black my-8 grid grid-cols-1 gap-3 md:gap-5 xl:gap-10"
        >
          <div>
            <h1 className="p-3 text-xs text-center font-extrabold md:text-2xl md:my-5">
              Memahami Firewall dan Pentingnya Keamanan Jaringan
            </h1>
          </div>
          {height > 2000 && <Scroolup />}
          <Pendahuluan />
          <Pengertian />
          <Jenis />
          <Fungsi />
          <Konfigurasi />
          <Kesimpulan />
        </div>
      </div>
    </Layout>
  );
};

export default Firewall;
