const MIN_SCREEN_WIDTH = 640;

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export const getIsMobile = (minScreenWith = MIN_SCREEN_WIDTH) =>
  getWidth() < minScreenWith;
