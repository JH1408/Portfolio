import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "motion/react";

import JH_Logo from "../assets/JH_Logo_min.png";
import scrollIntoView from "../utils/scrollIntoView";
import useIsScrolledPastHero from "../utils/useIsScrolledPastThreshold";
import useOutsideClick from "../utils/useOutsideClick";

const baseStyleLogo = "mt-4 h-[60px]";
const scrollStyleLogo = "mt-[5px] h-[30px]";

const scrollStyleNav = "text-xl bg-mediumdarkblue h-[40px] shadow-nav my-0";
const baseStyleNav = "";

const scrollStyleLink = "text-[1.2rem] mt-[0.25rem]";
const baseStyleLink = "text-2xl mt-4";

const borderActive = "border-b-[1.5px] border-gold";

const navLinks = [
  { id: "about", linkText: "About" },
  { id: "contact", linkText: "Contact" },
];

const Header: React.FC<{ activeSection?: string }> = ({ activeSection }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isScrolledPastHero = useIsScrolledPastHero();
  const navigate = useNavigate();
  const isPrivacyPage = window.location.pathname === "/privacy";

  useOutsideClick(ref, () => setIsMobileNavOpen(false));

  const onLinkClick = (id: string) => {
    if (!isPrivacyPage) {
      scrollIntoView(id);
    }
    navigate(`/#${id}`);
  };

  return (
    <>
      <div
        className={`z-10 fixed w-full flex justify-between transition-all duration-500 ease-out ${isScrolledPastHero || isPrivacyPage ? scrollStyleNav : baseStyleNav}`}
      >
        <div onClick={() => onLinkClick("page-top")} className="z-10">
          <img
            src={JH_Logo}
            alt="JH_Logo"
            className={`sm:ml-[45px] ml-[15px] drop-shadow-md transition-all ease-out duration-500 cursor-pointer ${isScrolledPastHero || isPrivacyPage ? scrollStyleLogo : baseStyleLogo}`}
          />
        </div>

        <nav className="items-center max-sm:hidden">
          <ul className="flex text-white">
            {navLinks.map(({ id, linkText }) => (
              <li
                key={id}
                onClick={() => onLinkClick(id)}
                className={`${activeSection === id ? borderActive : ""} drop-shadow-md hover:border-b-[1.5px] hover:border-gold hover:transition-[border] hover:ease-out hover:duration-200 transition-[font-size,margin-top] duration-500 ease-out mr-[50px] ${isScrolledPastHero || isPrivacyPage ? scrollStyleLink : baseStyleLink}`}
              >
                {linkText}
              </li>
            ))}
          </ul>
        </nav>
        <div
          ref={ref}
          className={`sm:hidden mr-[15px] ${isScrolledPastHero ? "mt-0" : "mt-[15px]"}`}
        >
          <span
            className={`[&>div]:z-10 ${isScrolledPastHero ? "[&>div]:mt-[-5px]" : "[&>div]:mt-[0px]"}`}
          >
            <Hamburger
              direction="left"
              toggled={isMobileNavOpen}
              size={20}
              toggle={setIsMobileNavOpen}
              color="#ffdb9e"
            />
          </span>
          <AnimatePresence>
            {isMobileNavOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed left-0 right-0 top-0 p-5 pt-[50px] bg-mediumdarkblue text-white"
              >
                <ul className="grid gap-2">
                  {navLinks.map(({ id, linkText }, index) => (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.1 + index / 10,
                      }}
                      key={id}
                      className={`w-full p-[0.08rem] ${scrollStyleLink}`}
                      onClick={() => {
                        setIsMobileNavOpen((prev) => !prev);
                        onLinkClick(id);
                      }}
                    >
                      {linkText}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div
        className={`bg-overlay ${isMobileNavOpen ? "opacity-100 h-full" : "opacity-0 h-0"} w-full absolute top-0 left-0 z-[5] transition-opacity duration-500 ease-out`}
      ></div>
    </>
  );
};

export default Header;
