import { Link } from "react-router-dom";
import avatar from "./../assets/img/me.jpg";
import {
  Whatsapp,
  Linkedin,
  Instagram,
  Github,
} from "./../components/icons/Social";

const ProfileCard = () => {
  return (
    <div className="w-[90%] opacity-95 md:w-[60%] h-[65%] m-auto shadow-2xl shadow-black flex flex-col md:flex-row items-center self-center rounded-md">
      <div className="w-[95%] grid place-items-center">
        <img
          src={avatar}
          alt={avatar}
          className="md:w-[70%] w-[50%] rounded-md shadow-lg shadow-black brightness-60 hover:blur-lg transition"
        />
      </div>
      <div className="flex flex-col md:items-start items-center justify-center w-full h-full md:h-[80%]">
        <ul className="pl-10 md:p-0 text-xs md:text-xl flex flex-col justify-center md:pt-10 h-full w-full md:h-[70%] ">
          <li className="leading-[2.5]">
            <span className="font-bold">Nama :</span> Romy Saputra Sihananda
          </li>
          <li className="leading-[2.5]">
            <span className="font-bold">Kelas :</span> 12 TKJ 1{" "}
          </li>
          <li className="leading-[2.5]">
            <span className="font-bold">Absen :</span> 30
          </li>
          <li className="leading-[2.5]">
            <span className="font-bold">Email :</span>{" "}
            <Link
              className="underline hover:text-blue-react"
              to="mailto:romysaputrasihanandaa@gmail.com"
              target="_blank"
            >
              romysaputrasihanandaa@gmail.com
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-start w-full h-[30%] px-8 md:pr-32 md:pl-4 md:pt-4">
          <Link target="_blank" to="https://wa.me/+6285755430439">
            <Whatsapp />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/romy-saputra-sihananda-495500270/"
          >
            <Linkedin />
          </Link>
          <Link target="_blank" to="https://www.instagram.com/romys.12/">
            <Instagram />
          </Link>
          <Link target="_blank" to="https://github.com/RomySaputraSihananda">
            <Github />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
