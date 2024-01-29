import "./Footer.css";
import { RiFacebookBoxFill } from "react-icons/ri";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <span id="logo" className="logo white middle">
          Taste now
        </span>
        <div className="flex-icons">
          <RiFacebookBoxFill className="footer-icons white" />
          <ImInstagram className="footer-icons white" />
          <FaTwitter className="footer-icons white" />
          <FaYoutube className="footer-icons white" />
        </div>
      </div>
      <div className="footer-right">
        <div className="child">
          <a href="#" className="white block">
            Seslendirme ve Alt Jazz
          </a>
          <a href="#" className="white block">
            Media Market
          </a>
          <a href="#" className="white block">
            Gillie
          </a>
          <a href="#" className="white block">
            Size Last
          </a>
        </div>
        <div className="child">
          <a href="#" className="white block">
            Self Betimes
          </a>
          <a href="#" className="white block">
            Yatırımcı İlişkileri
          </a>
          <a href="#" className="white block">
            Basal Himmler
          </a>
        </div>
        <div className="child">
          <a href="#" className="white block">
            Yard Market
          </a>
          <a href="#" className="white block">
            Is İmkanları
          </a>
          <a href="#" className="white block">
            Car Tercihleri
          </a>
        </div>
        <div className="child">
          <a href="#" className="white block">
            Hedge Karla
          </a>
          <a href="#" className="white block">
            Mullein Koşulları
          </a>
          <a href="#" className="white block">
            Autumnal Bulgier
          </a>
        </div>
      </div>
      <div className="flex-icons-small">
          <RiFacebookBoxFill className="footer-icons white" />
          <ImInstagram className="footer-icons white" />
          <FaTwitter className="footer-icons white" />
          <FaYoutube className="footer-icons white" />
        </div>
    </footer>
  );
};

export default Footer;
