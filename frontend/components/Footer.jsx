import Link from "next/link";
// import Medi from "../Assets/medi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#D2E0FB]  flex flex-col lg:flex-row justify-around items-center mt-4 p-8 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-1/5 flex items-center flex-col">
      <h1 className="julius text-2xl font-bold text-center">Linkfolio</h1>
      </div>
      <div className="flex w-full lg:w-1/5 mt-4 flex-row text-[#373737] items-center justify-around flex-wrap">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col  h-[64px]"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <p className="text-sm">Facebook</p>
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center h-[64px]"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <p className="text-sm">Instagram</p>
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" h-[64px]"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <p className="text-sm">Twitter</p>
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center h-[64px]"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <p className="text-sm">LinkedIn</p>
        </Link>
      </div>
      <div className="w-full lg:w-1/5 text-center lg:text-left">
        <h2 className="text-2xl mb-2">Contact Us</h2>
        <p>iqlipse22@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
