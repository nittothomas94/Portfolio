const Heading = ({ text }) => {
  return (
    <h1 className="flex flex-wrap gap-[2px] text-[60px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-bold leading-[80px] sm:leading-[100px] md:leading-[120px]">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-200 ease-in-out hover:scale-[1.8]"
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default Heading;
