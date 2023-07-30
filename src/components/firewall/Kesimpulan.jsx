import style from "../../config/fontStyle";
import kesimpulan from "./../../assets/firewall/kesimpulan.png";
const Kesimpulan = () => {
  return (
    <div id="Kesimpulan" className={style.gapComponent}>
      <div>
        <h1 className={style.mainHeader}>Kesimpulan</h1>
        <img src={kesimpulan} alt={kesimpulan} className={style.img} />
      </div>
      <p className={style.paragraph}>
        Firewall adalah pertahanan pertama dan kritis dalam mengamankan jaringan
        dari berbagai ancaman siber yang dapat merugikan. Dengan mampu
        mengontrol dan memfilter lalu lintas data yang masuk dan keluar dari
        jaringan, firewall berperan penting dalam mencegah serangan dan menjaga
        integritas, kerahasiaan, dan ketersediaan data.
      </p>
      <p className={style.paragraph}>
        Tanpa firewall, jaringan akan terbuka dan rentan terhadap berbagai
        serangan seperti malware, virus, peretasan, serangan DDoS, dan upaya
        akses tidak sah. Firewall membantu mengidentifikasi dan memblokir lalu
        lintas yang mencurigakan atau berbahaya berdasarkan aturan keamanan yang
        telah ditetapkan. Ini membantu mengurangi risiko terjadinya kebocoran
        data, pencurian identitas, gangguan layanan, dan kerugian lainnya akibat
        serangan siber.
      </p>
      <p className={style.paragraph}>
        Sebagai pengguna jaringan, kita memiliki tanggung jawab untuk melindungi
        data dan informasi kita serta mencegah jaringan kita dari ancaman siber.
        Salah satu langkah pencegahan yang paling efektif adalah dengan selalu
        menggunakan firewall dalam infrastruktur jaringan kita.
      </p>
      <p className={style.paragraph}>
        Dengan menggunakan firewall, kita dapat menciptakan lapisan pertahanan
        yang kokoh dan menghadapi serangan siber dengan lebih percaya diri.
        Ingatlah bahwa investasi dalam keamanan jaringan tidak pernah sia-sia,
        karena dampak dari serangan siber dapat sangat merugikan, baik secara
        finansial maupun reputasi perusahaan.
      </p>
      <p className={style.paragraph}>
        Mari bersama-sama menjaga jaringan kita dari ancaman yang mengintai
        dengan menggunakan firewall sebagai benteng pertahanan pertama dalam
        menjaga keamanan di dunia digital yang terus berkembang pesat.
      </p>
    </div>
  );
};

export default Kesimpulan;
