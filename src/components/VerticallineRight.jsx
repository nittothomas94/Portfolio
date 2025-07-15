const VerticalLineRight = () => {
  return (
    <div className="fixed right-[40px] bottom-[40px] h-[15%] w-[1px] bg-gray-400/40 z-[200] font-poppins hidden lg:block">
      <div className="absolute -top-[120px] -left-[8px] flex flex-col gap-[10px] text-[16px]">
        <a
          href="https://github.com/nittothomas94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github text-green-600 hover:text-green-400 cursor-pointer" />
        </a>
        <a href="tel:9446979075">
          <i className="fa-solid fa-phone text-green-600 hover:text-green-400 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/nittothomas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin text-green-600 hover:text-green-400 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/nittothomas__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-instagram text-green-600 hover:text-green-400 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default VerticalLineRight;
