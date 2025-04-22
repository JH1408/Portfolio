import { useTrackVisibility } from "react-intersection-observer-hook";

const useGetActiveSection = () => {
  const [aboutRef, { isVisible: isAboutSectionVisible }] = useTrackVisibility({
    threshold: 0.75,
  });

  const [contactRef, { isVisible: isContactSectionVisible }] =
    useTrackVisibility({
      threshold: 0.75,
    });

  const activeSection = isContactSectionVisible
    ? "contact"
    : isAboutSectionVisible
      ? "about"
      : "hero";
  // there's a weird issue where you can be between about and hero and then nothing is selected

  return { contactRef, aboutRef, activeSection };
};

export default useGetActiveSection;
