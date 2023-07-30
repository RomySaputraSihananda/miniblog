import style from "../../config/fontStyle";
import pengertian from "./../../assets/firewall/pengertian.png";
import kerja from "./../../assets/firewall/kerja.png";

const Pengertian = () => {
  return (
    <div id="Pengertian" className={style.gapComponent}>
      <div>
        <h1 className={style.mainHeader}>Pengertian Firewall</h1>
        <img src={pengertian} alt={pengertian} className={style.img} />
        <p className={style.paragraph}>
          Firewall adalah sebuah perangkat lunak atau perangkat keras yang
          berfungsi untuk mengontrol dan mengamankan lalu lintas data yang masuk
          dan keluar dari jaringan. Tujuan utama dari firewall adalah untuk
          melindungi jaringan dari ancaman dan serangan siber dengan membatasi
          akses yang tidak sah atau berbahaya ke dalam jaringan. Firewall
          menciptakan lapisan pertahanan yang efektif antara jaringan lokal
          (intranet) dan jaringan eksternal (internet) atau antara jaringan
          internal yang berbeda.
        </p>
        <p className={style.paragraph}>
          Firewall adalah salah satu elemen penting dalam menjaga keamanan
          jaringan. Ini adalah teknologi yang berfungsi untuk mengontrol dan
          memantau lalu lintas yang masuk dan keluar dari jaringan. Firewall
          bertindak sebagai penghalang antara jaringan internal (misalnya,
          jaringan perusahaan) dengan jaringan eksternal (misalnya, internet).
          Tujuan utamanya adalah untuk mengidentifikasi, mengizinkan, atau
          memblokir lalu lintas berdasarkan aturan dan kebijakan keamanan yang
          ditentukan sebelumnya.
        </p>
      </div>
      <div>
        <h1 id="Kerja" className={style.subHeader}>
          Cara Kerja Firewall
        </h1>
        <img src={kerja} alt={kerja} className={style.img} />
        <p className={style.paragraph}>
          Firewall bekerja dengan memantau dan memfilter data yang melewati
          jaringan berdasarkan aturan keamanan yang telah ditentukan sebelumnya.
          Proses kerjanya dapat dijelaskan dalam beberapa langkah berikut
        </p>
      </div>
      <div>
        <ol>
          <li>
            <h1 className={style.subSubHeader}>1. Pengawasan Lalu Lintas</h1>
            <p className={style.paragraph}>
              Ketika data atau paket informasi dikirim melalui jaringan,
              firewall berada di tengah jalur lalu lintas tersebut. Ini berarti
              semua data yang keluar atau masuk melalui jaringan akan diinspeksi
              oleh firewall.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>
              2. Pengenalan Sumber dan Tujuan
            </h1>
            <p className={style.paragraph}>
              Firewall akan mengevaluasi sumber dan tujuan data, yaitu alamat IP
              dan nomor port yang terkait dengan paket data tersebut.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>
              3. Membandingkan dengan Aturan Keamanan
            </h1>
            <p className={style.paragraph}>
              Setiap firewall memiliki aturan dan kebijakan keamanan yang telah
              ditentukan sebelumnya oleh administrator jaringan. Paket data akan
              dibandingkan dengan aturan ini untuk menentukan apakah diizinkan
              atau diblokir.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>
              4. Filterisasi Berdasarkan Aturan
            </h1>
            <p className={style.paragraph}>
              Jika paket data sesuai dengan aturan keamanan, firewall akan
              mengizinkannya melewati dan mencapainya ke tujuan yang dimaksud.
              Namun, jika paket data melanggar aturan atau mencurigakan,
              firewall akan memblokirnya untuk mencegah ancaman masuk ke dalam
              jaringan.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>5. Jenis Filterisasi</h1>
            <p className={style.paragraph}>
              Firewall dapat menerapkan berbagai jenis filterisasi, termasuk
              filterisasi berdasarkan alamat IP, nomor port, protokol jaringan,
              jenis aplikasi, atau pola lalu lintas tertentu. Dengan cara ini,
              firewall dapat mengontrol lalu lintas yang diizinkan dan
              memastikan hanya lalu lintas yang sah dan diinginkan yang dapat
              melintas ke dalam jaringan.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>6. Logging dan Notifikasi</h1>
            <p className={style.paragraph}>
              Beberapa firewall juga dilengkapi dengan fitur pencatatan
              (logging) yang mencatat aktivitas lalu lintas dan tindakan
              firewall. Selain itu, dalam beberapa konfigurasi, firewall dapat
              dikonfigurasi untuk memberikan notifikasi atau peringatan kepada
              administrator jaringan tentang upaya akses yang mencurigakan atau
              pelanggaran keamanan.
            </p>
          </li>
        </ol>
      </div>
      <p className={style.paragraph}>
        Dengan cara kerja ini, firewall membantu melindungi jaringan dari
        berbagai ancaman, seperti serangan DDoS (Distributed Denial of Service),
        malware, virus, peretasan, dan akses tidak sah. Dalam kombinasi dengan
        langkah-langkah keamanan lainnya, firewall menjadi salah satu lapisan
        pertahanan yang penting dalam menjaga keamanan dan integritas jaringan
        dalam lingkungan digital saat ini.
      </p>
    </div>
  );
};

export default Pengertian;
