import style from "../../config/fontStyle";
import winFirewall from "./../../assets/img/windowsfire.jpg";
import { img1, img2, img3, img4 } from "../../assets/config/init";
import konfigurasi from "./../../assets/firewall/konfigurasi.png";
import brureForce from "./../../assets/firewall/brute-force.jpg";

const Konfigurasi = () => {
  return (
    <div id="Konfigurasi" className={style.gapComponent}>
      <div>
        <h1 className={style.mainHeader}>Konfigurasi Dasar Firewall</h1>
        <img src={konfigurasi} alt={konfigurasi} className={style.img} />
        <p className={style.paragraph}>
          Berikut adalah panduan langkah demi langkah untuk konfigurasi dasar
          firewall:
        </p>
      </div>
      <div>
        <ul>
          <li>
            <h1 className={style.subSubHeader}>
              1. Tentukan Tujuan dan Kebijakan Keamanan
            </h1>
            <p className={style.paragraph}>
              Tentukan tujuan dari konfigurasi firewall. Apa yang ingin Anda
              lindungi? Identifikasi sumber daya kritis dan potensi ancaman yang
              ingin dihadapi.
            </p>
            <p className={style.paragraph}>
              Tetapkan kebijakan keamanan yang jelas. Tentukan apa yang
              diizinkan dan apa yang diblokir oleh firewall. Pastikan kebijakan
              ini sesuai dengan kebutuhan dan aturan keamanan perusahaan.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>
              2. Pilih Jenis Firewall yang Sesuai
            </h1>
            <p className={style.paragraph}>
              Pilih jenis firewall yang sesuai dengan kebutuhan jaringan Anda.
              Apakah Anda memerlukan firewall berbasis paket, stateful firewall,
              atau firewall berbasis aplikasi?
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>
              3. Konfigurasi Perangkat Firewall
            </h1>
            <p className={style.paragraph}>
              Ikuti petunjuk produsen perangkat firewall untuk mengonfigurasi
              perangkat secara fisik dan menghubungkannya ke jaringan.
            </p>
            <p className={style.paragraph}>
              Atur alamat IP dan konfigurasi jaringan yang relevan.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>
              4. Identifikasi Layanan dan Port yang Digunakan
            </h1>
            <p className={style.paragraph}>
              Tentukan layanan dan port yang diizinkan masuk atau keluar dari
              jaringan Anda. Misalnya, port 80 untuk HTTP, port 443 untuk HTTPS,
              dll.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>5. Buat Aturan Firewall</h1>
            <p className={style.paragraph}>
              Buat aturan firewall berdasarkan kebijakan keamanan yang telah
              ditentukan sebelumnya.
            </p>
            <p className={style.paragraph}>
              Aturan-aturan ini harus memungkinkan lalu lintas yang sah dan
              memblokir lalu lintas yang mencurigakan atau tidak diinginkan.
              Periksa apakah ada aturan default yang harus diubah atau
              ditambahkan.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>6. Uji dan Evaluasi Firewall</h1>
            <p className={style.paragraph}>
              Uji firewall untuk memastikan aturan berfungsi seperti yang
              diharapkan.
            </p>
            <p className={style.paragraph}>
              Monitor lalu lintas jaringan untuk memastikan bahwa firewall
              berperilaku sesuai dengan kebijakan keamanan.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1 id="Brute" className={style.subHeader}>
          Melindungi Server Web dari Serangan Brute Force
        </h1>
        <img src={brureForce} alt={brureForce} className={style.img} />
      </div>
      <div>
        <ul>
          <li>
            <h1 className={style.subSubHeader}>1. Tentukan Tujuan</h1>
            <p className={style.paragraph}>
              Melindungi server web dari serangan brute force pada protokol SSH
              (Secure Shell).
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>2. Pilih Jenis Firewall</h1>
            <p className={style.paragraph}>
              Gunakan stateful firewall yang dapat memantau status koneksi dan
              menyesuaikan aturan sesuai dengan aktivitas yang sedang
              berlangsung.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>
              3. Konfigurasi Perangkat Firewall
            </h1>
            <p className={style.paragraph}>
              Hubungkan firewall di antara server web dan internet.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>
              4. Identifikasi Layanan dan Port
            </h1>
            <p className={style.paragraph}>
              Identifikasi port SSH standar (misalnya, port 22) yang digunakan
              oleh server web untuk koneksi jarak jauh.
            </p>
          </li>
          <li>
            <h1 className={style.subSubHeader}>5. Buat Aturan Firewall</h1>
            <ul>
              <li>
                <p className={style.paragraph}>
                  a. Izinkan akses SSH dari jaringan internal ke server web.
                </p>
              </li>
              <li>
                <p className={style.paragraph}>
                  b. Batasi jumlah upaya koneksi SSH dari alamat IP eksternal.
                  Misalnya, izinkan hanya 3 percobaan koneksi dalam waktu 1
                  menit dari alamat IP yang sama.
                </p>
              </li>
              <li>
                <p className={style.paragraph}>
                  c. Blokir alamat IP yang mencoba terlalu banyak koneksi yang
                  gagal (misalnya, lebih dari 5 kali) dalam waktu singkat.
                </p>
              </li>
              <li>
                <p className={style.paragraph}>
                  d. Batasi atau blokir akses SSH dari wilayah geografis yang
                  tidak perlu (misalnya, negara-negara yang jarang digunakan).
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h1 className={style.subSubHeader}>6. Uji dan Evaluasi Firewall</h1>
            <p className={style.paragraph}>
              Uji aturan firewall dengan mencoba koneksi SSH dari berbagai
              alamat IP, termasuk dari alamat IP internal dan eksternal.
              Pastikan bahwa aturan berperilaku sesuai dengan kebijakan yang
              telah ditetapkan.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <p className={style.paragraph}>
          Konfigurasi firewall harus selalu diperbarui dan disesuaikan dengan
          kebutuhan dan perubahan lingkungan jaringan. Selain itu, penting untuk
          terus memantau lalu lintas jaringan dan menjaga perangkat firewall
          tetap terlindungi dan diperbaharui agar tetap efektif dalam menghadapi
          ancaman keamanan yang terus berkembang.
        </p>
      </div>
      <div>
        <h1 id="Windows" className={style.subHeader}>
          Melindungi Windows Dari Serangan Malware
        </h1>
        <img src={winFirewall} alt={winFirewall} className={style.img} />
        <p className={style.paragraph}>
          Firewall dalam komputer berfungsi mengatur dan mengontrol akses
          terhadap siapapun yang mengakses jaringan lokal maupun ke pihak
          luar.Sehingga beberapa malware atapun phising bisa terfilter melalui
          firewall yang berada di komputer anda.Software firewall ini merupakan
          bawaan dari windows dan sudah otomatis terinstall,kita membukanya di
          control panel yang ada pada windows anda.Firewall berfungsi juga
          menjadi sistem pengatur komunikasi antar dua jaringan yang
          berbeda.Berikut adalah panduan langkah langkah untuk konfigurasi
          firewall di windows:
        </p>
      </div>
      <div>
        <ol>
          <li>
            <p className={style.subSubHeader + " text-[0.5rem]"}>
              1. Masuk ke control panel dalam laptop/komputer anda,kemudian
              pilih and security
            </p>
            <img src={img1} alt={img1} className={style.img} />
          </li>
          <li>
            <p className={style.subSubHeader + " text-[0.5rem]"}>
              2. Kemudian setelah masuk ke system and security pilih lah Windows
              Firewall.
            </p>
            <img src={img2} alt={img2} className={style.img} />
          </li>
          <li>
            <p className={style.subSubHeader + " text-[0.5rem]"}>
              3. Kemudian setelah masuk ke windows firewall,disanaa ada beberapa
              pilihan di tab sebelah kiri jendela firewall.Pilih lah Turn
              Windows Firewall On or Off.
            </p>
            <img src={img3} alt={img3} className={style.img} />
          </li>
          <li>
            <p className={style.subSubHeader + " text-[0.5rem]"}>
              4. Setelah itu anda tinggal setting untuk menghidupkan firewall
              windows anda.centanglah pada home network dan public
              network,tergantung anda menggunakan koneksi / sambungan berjenis
              apa.Turn on an sehingga indikator akan tampak berwarna hijau.
            </p>
            <img src={img4} alt={img4} className={style.img} />
          </li>
          <li>
            <p className={style.subSubHeader + " text-[0.5rem]"}>
              5. Komputer anda akan terproteksi dari sambungan lokal dan pihak
              luar.Secara otomatis firewall windows akan memberikan notifikasi
              jika ada hal mencurigakan pada internet di luar sana.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Konfigurasi;
