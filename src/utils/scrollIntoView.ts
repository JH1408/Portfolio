const scrollIntoView = (id: string) => {
  if (id === "page-top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

export default scrollIntoView;
