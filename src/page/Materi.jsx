import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/Card";
import firewall from "./../assets/img/firewall.jpeg";
const Home = () => {
  useEffect(() => {
    document.title = "Materi";
  }, []);
  return (
    <Layout>
      <div className="p-10 grid grid-cols-2 place-items-center grid-rows-2 md:grid-cols-3 xl:grid-cols-5 gap-4 h-[85vh]">
        <Card
          name="firewall"
          img={firewall}
          title="Memahami Firewall dan Pentingnya Keamanan Jaringan"
          prev="Firewall adalah sebuah perangkat lunak atau perangkat keras yang
          berfungsi untuk mengontrol dan mengamankan lalu lintas data yang masuk
          dan keluar dari jaringan. Tujuan utama dari firewall adalah untuk
          melindungi jaringan dari ancaman dan serangan siber dengan membatasi
          akses yang tidak sah atau berbahaya ke dalam jaringan. Firewall
          menciptakan lapisan pertahanan yang efektif antara jaringan lokal
          (intranet) dan jaringan eksternal (internet) atau antara jaringan
          internal yang berbeda."
        />
      </div>
    </Layout>
  );
};

export default Home;
