import scrollIntoView from "../utils/scrollIntoView";
import hero from "../assets/Hero_IMG_min.png";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${hero})` }}
      className="bg-cover bg-center bg-no-repeat bg-fixed bg-darkblue blur-[0.5px]-z-5 text-white w-full h-screen pt-0 mt-0 relative block"
    >
      <div className="font-bold font-sans uppercase absolute top-[45%] w-full animate-fadeInUp">
        <h1 className="sm:text-6xl text-5xl whitespace-nowrap leading-normal tracking-[0.1rem]">
          Josy Hartig
        </h1>
        <h2 className="text-lg tracking-[0.175rem]">Software Engineer</h2>
      </div>
      <div
        className="absolute bottom-5 cursor-pointer p-[20px] inline-block -translate-x-1/2 left-1/2"
        onClick={() => scrollIntoView("about")}
      >
        <div className="animate-float border-r-2 border-b-2 border-gold p-[5px]"></div>
      </div>
    </section>
  );
};

export default Hero;
