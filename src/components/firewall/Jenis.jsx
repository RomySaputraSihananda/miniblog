import style from "../../config/fontStyle";
import jenis from "./../../assets/firewall/jenis.gif";
import stateful from "./../../assets/firewall/stateful.png";
import filter from "./../../assets/firewall/filter.jpg";
import application from "./../../assets/firewall/application.webp";

const Jenis = () => {
  return (
    <div id="Jenis" className={style.gapComponent}>
      <div>
        <h1 className={style.mainHeader}>Jenis-jenis Firewall</h1>
        <img src={jenis} alt={jenis} className={style.img} />
        <p className={style.paragraph}>
          Sebagai sistem keamanan perangkat, terdapat beberapa jenis firewall
          yang dapat disesuaikan dengan kebutuhan. Berikut merupakan jenis-jenis
          firewall yang dapat diketahui:
        </p>
      </div>
      <ol className={style.gapComponent}>
        <li>
          <h1 id="Jenis1" className={style.subSubHeader}>
            1. Firewall Berbasis Paket (Packet Filtering Firewall)
          </h1>
          <img src={filter} alt={filter} className={style.img} />
          <p className={style.paragraph}>
            Firewall berbasis paket adalah jenis firewall yang melakukan
            filterisasi data berdasarkan informasi yang terdapat dalam paket
            data itu sendiri, seperti alamat IP sumber dan tujuan, nomor port,
            dan protokol jaringan yang digunakan. Firewall ini menganalisis
            setiap paket data secara terpisah tanpa mempertimbangkan koneksi
            sebelumnya atau sesudahnya.
          </p>
          <h1 className={style.subSubHeader}>Kelebihan:</h1>
          <ul>
            <li>
              <p className={style.paragraph}>
                - Efisien dan cepat karena tidak menyimpan status koneksi atau
                informasi terkait dalam tabel koneksi.
              </p>
            </li>
            <li>
              <p className={style.paragraph}>
                - Sederhana dan cocok untuk mengamankan jaringan dengan lalu
                lintas data yang tidak terlalu rumit.
              </p>
            </li>
          </ul>
          <h1 className={style.subSubHeader}>Kekurangan:</h1>
          <ul>
            <li>
              <p className={style.paragraph}>
                - Kurang cerdas dalam menghadapi serangan tingkat tinggi karena
                hanya memeriksa paket data secara individu tanpa
                mempertimbangkan konteks lalu lintas.
              </p>
            </li>
            <li>
              <p className={style.paragraph}>
                - Rentan terhadap serangan yang menggunakan teknik pembelahan
                data (fragmentation attack) atau teknik yang menyamarkan
                informasi di dalam paket data.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h1 id="Jenis2" className={style.subSubHeader}>
            2. Stateful Firewall
          </h1>
          <img src={stateful} alt={stateful} className={style.img} />
          <p className={style.paragraph}>
            Stateful firewall adalah jenis firewall yang dapat "mengingat"
            status koneksi untuk setiap sesi atau aliran lalu lintas yang
            melewati jaringan. Firewall ini mengikuti riwayat koneksi dan dapat
            membedakan antara lalu lintas yang sah dan tidak sah berdasarkan
            informasi tentang sesi koneksi sebelumnya.
          </p>
          <h1 className={style.subSubHeader}>Kelebihan:</h1>
          <ul>
            <li>
              <p className={style.paragraph}>
                - Lebih cerdas dalam mengenali dan mengontrol lalu lintas karena
                dapat memantau status koneksi.
              </p>
            </li>
            <li>
              <p className={style.paragraph}>
                - Mampu menghadapi serangan yang melibatkan interaksi antara
                beberapa paket, seperti serangan SYN flood dan DoS (Denial of
                Service).
              </p>
            </li>
          </ul>
          <h1 className={style.subSubHeader}>Kekurangan:</h1>
          <ul>
            <li>
              <p className={style.paragraph}>
                - Memerlukan alokasi sumber daya yang lebih besar karena harus
                menyimpan informasi tentang status koneksi.
              </p>
            </li>
            <li>
              <p className={style.paragraph}>
                - Lebih kompleks dan memerlukan konfigurasi yang lebih rumit
                daripada firewall berbasis paket.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h1 id="Jenis3" className={style.subSubHeader}>
            3. Aplikasi Firewall (Application Firewall)
          </h1>
          <img src={application} alt={application} className={style.img} />
          <p className={style.paragraph}>
            Firewall berbasis aplikasi, juga dikenal sebagai firewall lapisan
            aplikasi atau proxy firewall, adalah jenis firewall yang bekerja
            pada tingkat aplikasi di dalam lapisan protokol OSI (Open Systems
            Interconnection). Firewall ini dapat memahami dan menganalisis
            protokol aplikasi tertentu dan mengambil keputusan berdasarkan
            konteks aplikasi tersebut.
          </p>
          <h1 className={style.subSubHeader}>Kelebihan:</h1>
          <ul>
            <li>
              <p className={style.paragraph}>
                - Lebih pintar dalam mengidentifikasi dan mengontrol lalu lintas
                aplikasi, sehingga dapat memberikan perlindungan yang lebih
                efektif terhadap serangan yang berfokus pada aplikasi.
              </p>
            </li>
            <li>
              <p className={style.paragraph}>
                - Memungkinkan akses lebih terperinci terhadap berbagai fitur
                keamanan karena dapat memeriksa konten di dalam lalu lintas
                aplikasi.
              </p>
            </li>
          </ul>
          <h1 className={style.subSubHeader}>Kekurangan:</h1>
          <ul>
            <li>
              <p className={style.paragraph}>
                - Lebih lambat daripada firewall berbasis paket karena
                melibatkan pemrosesan data di tingkat aplikasi.
              </p>
            </li>
            <li>
              <p className={style.paragraph}>
                - Memerlukan pengaturan yang lebih kompleks dan konfigurasi
                khusus untuk setiap aplikasi yang ingin diawasi.
              </p>
            </li>
          </ul>
        </li>
      </ol>
      <p className={style.paragraph}>
        Penting untuk diingat bahwa firewall yang efektif sering kali
        menggabungkan beberapa jenis firewall ini untuk menciptakan pertahanan
        yang komprehensif dan lebih aman. Keputusan tentang jenis firewall yang
        akan digunakan harus didasarkan pada kebutuhan dan kompleksitas jaringan
        serta tingkat keamanan yang diinginkan.
      </p>
    </div>
  );
};

export default Jenis;
