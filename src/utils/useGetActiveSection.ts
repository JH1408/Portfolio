import { useTrackVisibility } from 'react-intersection-observer-hook';

const useGetActiveSection = () => {
  const [aboutRef, { isVisible: isAboutSectionVisible }] = useTrackVisibility({
    threshold: 0.75,
  });

  const [contactRef, { isVisible: isContactSectionVisible }] =
    useTrackVisibility({
      threshold: 0.75,
    });

  const [projectsRef, { isVisible: isProjectsSectionVisible }] =
    useTrackVisibility({
      threshold: 0.75,
    });

  const activeSection = isContactSectionVisible
    ? 'contact'
    : isAboutSectionVisible
      ? 'about'
      : isProjectsSectionVisible
        ? 'projects'
        : 'hero';
  // there's a weird issue where you can be between about and hero and then nothing is selected

  return { contactRef, aboutRef, projectsRef, activeSection };
};

export default useGetActiveSection;
