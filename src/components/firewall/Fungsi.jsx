import style from "../../config/fontStyle";
import fungsi from "./../../assets/firewall/Fungsi.jpg";
import malware from "./../../assets/firewall/malware.jpg";

const Fungsi = () => {
  return (
    <div id="Fungsi" className={style.gapComponent}>
      <h1 className={style.mainHeader}>Fungsi Firewall</h1>
      <img src={fungsi} alt={fungsi} className={style.img} />
      <p className={style.paragraph}>
        Terdapat banyak sekali keunggulan dan fitur yang dapat dimanfaatkan oleh
        pengguna agar tetap aman dalam mengakses halaman situs. Berikut ini
        merupakan beberapa fungsi utama firewall dalam melindungi jaringan:
      </p>
      <ul>
        <li>
          <h1 className={style.subSubHeader}>1. Melindungi dari Malware</h1>
          <p className={style.paragraph}>
            Firewall berperan dalam mencegah malware (perangkat lunak berbahaya)
            masuk ke dalam jaringan dengan memblokir lalu lintas yang
            mencurigakan. Ini termasuk melindungi dari virus, worm, ransomware,
            dan trojan yang dapat merusak data atau mencuri informasi sensitif.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>2. Memfilter Spam</h1>
          <p className={style.paragraph}>
            Firewall dapat dilengkapi dengan fitur penyaringan email untuk
            mengidentifikasi dan memblokir spam (email sampah) sebelum mencapai
            kotak masuk karyawan. Dengan demikian, ini membantu mengurangi waktu
            dan sumber daya yang terbuang untuk mengelola email tidak
            diinginkan.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>3. Untuk Monitoring Bandwidth</h1>
          <p className={style.paragraph}>
            Firewall juga berfungsi untuk membatasi dan memonitor layanan
            bandwidth yang bisa digunakan. Selanjutnya, anda juga dapat
            menetapkan batasan untuk setiap konten berupa gambar, video, musik,
            atau hiburan lain. Anda juga dapat menentukan sendiri konten yang
            cocok dengan minat dan keinginan anda, misalnya konten di bidang
            bisnis dan IT.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>4. Menghadapi Serangan DDoS</h1>
          <p className={style.paragraph}>
            Serangan Distribusi Layanan (DDoS) bertujuan untuk mengganggu
            ketersediaan layanan dengan membanjiri lalu lintas ke server target.
            Firewall dapat mengidentifikasi dan menangani lalu lintas DDoS
            dengan memblokir alamat IP yang mencurigakan dan mengurangi dampak
            serangan.
          </p>
        </li>
      </ul>
      <h1 id="Manfaat" className={style.mainHeader}>
        Manfaat Penting Menggunakan Firewall dalam Lingkungan Bisnis
      </h1>
      <img src={malware} alt={malware} className={style.img} />
      <ul>
        <li>
          <h1 className={style.subSubHeader}>1. Keamanan Data dan Informasi</h1>
          <p className={style.paragraph}>
            Firewall membantu melindungi data sensitif dan informasi penting
            dari akses tidak sah dan pencurian. Dengan mengontrol lalu lintas
            masuk dan keluar dari jaringan, firewall menjaga kerahasiaan data
            dan mencegah kebocoran informasi.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>2. Kontrol Akses</h1>
          <p className={style.paragraph}>
            Dengan firewall, bisnis dapat mengatur kebijakan akses yang sesuai
            untuk karyawan dan pengguna jaringan. Ini membantu mencegah akses
            tidak sah ke sumber daya penting dan melindungi jaringan dari
            potensi ancaman.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>3. Mengurangi Risiko Serangan</h1>
          <p className={style.paragraph}>
            Dengan menerapkan aturan keamanan yang tepat, firewall membantu
            mengurangi risiko dari serangan malware, virus, ransomware, dan
            serangan siber lainnya. Ini meminimalkan dampak negatif pada
            produktivitas dan operasional bisnis.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>
            4. Peningkatan Kinerja Jaringan
          </h1>
          <p className={style.paragraph}>
            Firewall dapat membantu mengoptimalkan kinerja jaringan dengan
            memblokir lalu lintas yang tidak sah atau tidak perlu. Dengan
            mengurangi beban lalu lintas yang tidak diinginkan, koneksi jaringan
            menjadi lebih efisien.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>5. Keandalan Layanan</h1>
          <p className={style.paragraph}>
            Firewall membantu menjaga ketersediaan layanan dengan menghadapi
            serangan DDoS dan melindungi server dari overloading atau crash
            karena lalu lintas yang berlebihan.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>6. Menjaga Reputasi Bisnis</h1>
          <p className={style.paragraph}>
            Dengan melindungi jaringan dari serangan dan ancaman, bisnis dapat
            menjaga reputasi mereka sebagai entitas yang dapat dipercaya dalam
            mengelola data dan informasi pelanggan.
          </p>
        </li>
        <li>
          <h1 className={style.subSubHeader}>7. Kepatuhan Regulasi</h1>
          <p className={style.paragraph}>
            Di banyak industri, ada peraturan dan standar keamanan data yang
            ketat. Firewall membantu organisasi untuk mematuhi peraturan ini
            dengan memberikan lapisan pertahanan tambahan terhadap ancaman
            siber.
          </p>
        </li>
      </ul>
      <p className={style.paragraph}>
        Dengan menggunakan firewall sebagai elemen kunci dalam strategi
        keamanan, bisnis dan organisasi dapat menciptakan lingkungan jaringan
        yang lebih aman, efisien, dan dapat diandalkan. Investasi dalam keamanan
        jaringan dengan firewall tidak hanya melindungi data dan informasi,
        tetapi juga membantu bisnis untuk tetap beroperasi dengan lancar dan
        berfokus pada pertumbuhan dan keberhasilan jangka panjang.
      </p>
    </div>
  );
};

export default Fungsi;
