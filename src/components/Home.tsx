import { useEffect } from "react";
import useGetActiveSection from "../utils/useGetActiveSection";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";
import scrollIntoView from "../utils/scrollIntoView";

const Home = () => {
  const { contactRef, aboutRef, activeSection } = useGetActiveSection();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1);
      scrollIntoView(section);
    }
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <Hero />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default Home;
