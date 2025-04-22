import { useLayoutEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PrivacyPolicy from "./PrivacyPolicy";
import { useLocation } from "react-router-dom";

const Privacy: React.FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default Privacy;
