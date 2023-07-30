import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mx-auto py-3 px-4 md:py-3 md:px-6 xl:py-4 xl:px-8 border-t border-gray-300">
      <p className="text-sm">
        Copyright by{" "}
        <Link
          to="https://github.com/RomySaputraSihananda"
          target="_blank"
          className="underline hover:text-blue-react"
        >
          me
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
