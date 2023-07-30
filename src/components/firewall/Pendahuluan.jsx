import style from "../../config/fontStyle";
import konsep from "./../../assets/firewall/konsep.png";
import firewall from "./../../assets/img/firewall.jpeg";

const Pendahuluan = () => {
  return (
    <div id="Pendahuluan" className={style.gapComponent}>
      <div>
        <img
          className={style.img + "md:w-[90%] xl:w-[90%]"}
          src={firewall}
          alt="firewall"
        />
        <p className={style.paragraph}>
          Di era digital saat ini, jaringan telah menjadi pondasi bagi hampir
          semua aspek kehidupan kita. Kita mengandalkan jaringan untuk
          berkomunikasi, bertransaksi, mendapatkan informasi, dan banyak lagi.
          Namun, dengan manfaat besar yang ditawarkan oleh jaringan, datanglah
          potensi risiko dan ancaman keamanan yang lebih tinggi. Seiring dengan
          perkembangan teknologi, serangan siber juga semakin kompleks dan
          berbahaya.
        </p>
        <p className={style.paragraph}>
          Keamanan jaringan menjadi sangat penting untuk melindungi data dan
          informasi sensitif, mencegah kebocoran data, gangguan layanan,
          pencurian identitas, dan serangan-serangan lainnya. Saat ini, tidak
          hanya organisasi besar yang menjadi sasaran, tetapi juga individu dan
          perusahaan kecil karena serangan siber dapat menyasar siapa saja.
        </p>
      </div>
      <div>
        <h1 className={style.subHeader} id="Konsep">
          Konsep Firewall
        </h1>
        <img src={konsep} alt={konsep} className={style.img} />
        <p className={style.paragraph}>
          Konsep dasar dari firewall adalah memeriksa paket data yang melewati
          jaringan berdasarkan kriteria tertentu. Firewall akan memutuskan
          apakah paket tersebut aman atau berbahaya berdasarkan aturan keamanan
          yang telah ditentukan sebelumnya. Jika paket data sesuai dengan aturan
          yang diatur, firewall akan mengizinkannya untuk melintas. Jika paket
          data tidak sesuai atau mencurigakan, firewall akan memblokirnya untuk
          mencegah potensi ancaman.
        </p>
        <p className={style.paragraph}>
          Firewall dapat beroperasi di berbagai tingkatan dalam jaringan, mulai
          dari perangkat keras yang terintegrasi di antara jaringan hingga
          perangkat lunak yang diinstal di komputer atau server.
        </p>
      </div>
    </div>
  );
};

export default Pendahuluan;
