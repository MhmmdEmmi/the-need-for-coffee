import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto border-b-2">
        <div className="flex flex-col items-center my-20">
          <h1 className="text-6xl lg:text-[10rem] p-2 font-bold">
            {HERO_CONTENT.title}
          </h1>
          <p className="lg:mt-6 font-extralight text-base mb-4 tracking-widest">
            {HERO_CONTENT.subtitle}
          </p>
          <img
            src={HERO_CONTENT.image}
            alt="Hero"
            className="w-full h-[65vh] object-cover rounded-2xl p-2"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
