interface HeroProps {
  heading: string;
  message: string;
}

const Hero = (props: HeroProps) => {
  const {heading, message} = props;

  return (
    <div className="flex p-10 items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img bg-no-repeat bg-center ">
      {/* overlay */}
      <div className="absolute top-0 left-0  right-0 bottom-0 bg-black/70 z-[2] "></div>
      <div className="p-5  text-white z-[2] sm:ml-[-10rem] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;
