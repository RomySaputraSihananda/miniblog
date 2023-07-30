const style = {
  mainList:
    "text-sm md:text-lg font-semibold md:font-bold hover:text-blue-react cursor-pointer",
  subList:
    "text-xs md:text-sm pl-2 md:pl-3 line-clamp-1 hover:text-blue-react cursor-pointer",
  subSubList:
    "text-[0.5rem] md:text-xs pl-3 md:pl-7 line-clamp-1 hover:text-blue-react cursor-pointer",
};

const NavMateri = () => {
  const navigate = (element) => {
    const offsetTop = document.getElementById(element).offsetTop;
    window.scrollTo({
      top: offsetTop - 10,
      behavior: "smooth",
    });
  };

  return (
    <nav className="p-2 md:p-10 w-full h-fit rounded-md shadow-xl shadow-black">
      <ul className="grid grid-cols-1 gap-3 opacity-100">
        <li>
          <h1
            onClick={() => navigate("Pendahuluan")}
            className={style.mainList}
          >
            Pendahuluan
          </h1>
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <h2
                className={style.subList}
                onClick={() => navigate("Pendahuluan")}
              >
                Pentingnya keamanan jaringan
              </h2>
            </li>
            <li>
              <h2 onClick={() => navigate("Konsep")} className={style.subList}>
                Konsep firewall
              </h2>
            </li>
          </ul>
        </li>
        <li>
          <h1 onClick={() => navigate("Pengertian")} className={style.mainList}>
            Bagian 1
          </h1>
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <h2
                onClick={() => navigate("Pengertian")}
                className={style.subList}
              >
                Pengertian Firewall
              </h2>
            </li>
            <li>
              <h2 onClick={() => navigate("Kerja")} className={style.subList}>
                Cara kerja firewall
              </h2>
            </li>
          </ul>
        </li>
        <li>
          <h1 onClick={() => navigate("Jenis")} className={style.mainList}>
            Bagian 2
          </h1>
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <h2 onClick={() => navigate("Jenis")} className={style.subList}>
                Jenis-jenis Firewall
              </h2>
              <ul className="grid grid-cols-1 gap-1">
                <li
                  onClick={() => navigate("Jenis1")}
                  className={style.subSubList}
                >
                  Firewall Berbasis Paket (Packet Filtering Firewall)
                </li>
                <li
                  onClick={() => navigate("Jenis2")}
                  className={style.subSubList}
                >
                  Stateful Firewall
                </li>
                <li
                  onClick={() => navigate("Jenis3")}
                  className={style.subSubList}
                >
                  Aplikasi Firewall (Application Firewall)
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h1 onClick={() => navigate("Fungsi")} className={style.mainList}>
            Bagian 3
          </h1>
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <h2 onClick={() => navigate("Fungsi")} className={style.subList}>
                Fungsi utama firewall
              </h2>
            </li>
            <li>
              <h2 className={style.subList} onClick={() => navigate("Manfaat")}>
                Manfaat penting firewall dalam lingkungan bisnis
              </h2>
            </li>
          </ul>
        </li>
        <li>
          <h1
            onClick={() => navigate("Konfigurasi")}
            className={style.mainList}
          >
            Bagian 4
          </h1>
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <h2
                onClick={() => navigate("Konfigurasi")}
                className={style.subList}
              >
                Konfigurasi dasar firewall
              </h2>
            </li>
            <li>
              <h2 onClick={() => navigate("Brute")} className={style.subList}>
                Penerapan firewall dalam skenario nyata
              </h2>
              <ul className="grid grid-cols-1 gap-1">
                <li
                  onClick={() => navigate("Brute")}
                  className={style.subSubList}
                >
                  Melindungi server web dari serangan brute force
                </li>
                <li
                  onClick={() => navigate("Windows")}
                  className={style.subSubList}
                >
                  Melindungi Windows dari serangan malware
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h1 onClick={() => navigate("Kesimpulan")} className={style.mainList}>
            Kesimpulan
          </h1>
        </li>
      </ul>
    </nav>
  );
};

export default NavMateri;
