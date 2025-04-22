import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const icons = [
  { name: faLinkedinIn, link: "https://www.linkedin.com/in/josephine-hartig" },
  { name: faGithub, link: "https://github.com/JH1408" },
  { name: faEnvelope, link: "mailto:info@josyhartig.com" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-lightblue flex h-auto py-[20px] w-full justify-center">
      <span className="sm:px-[5%] px-[2%]">
        {icons.map(({ name, link }) => (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 ease-out hover:text-mediumdarkblue sm:pr-[15px] pr-[10px]"
          >
            <FontAwesomeIcon
              icon={name}
              className="sm:text-[1.8rem] text-[1.5rem]"
            />
          </a>
        ))}
      </span>
      <p className="text-[0.8rem] text-balance pt-[0.5%] sm:px-[5%] px-[2%]">
        © 2025 Josy Hartig
      </p>
      <Link
        to="/privacy"
        className="hover:text-mediumdarkblue text-[0.8rem] text-balance pt-[0.5%] sm:px-[5%] px-[2%]"
      >
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
