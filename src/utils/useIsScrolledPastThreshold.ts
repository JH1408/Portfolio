import { useState, useEffect } from "react";
import { getIsMobile } from "./getIsMobile";
// height of navbar
const regularThreshold = 80;
const heightOfHeroText = 100;

const useIsScrolledPastHero = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const isMobile = getIsMobile();

  useEffect(() => {
    const threshold = isMobile
      ? 0.5 * window.innerHeight + heightOfHeroText
      : regularThreshold;

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - threshold) {
        setIsScrolledPastHero(true);
      } else if (window.scrollY <= window.innerHeight - threshold) {
        setIsScrolledPastHero(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return isScrolledPastHero;
};
export default useIsScrolledPastHero;
