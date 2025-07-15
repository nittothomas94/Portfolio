const VerticalLineLeft = () => {
  const handleMailClick = e => {
    e.preventDefault();
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=nittothomas94@gmail.com',
      '_self'
    );
  };

  return (
    <>
      {/* Full vertical line from top */}
      <div className="fixed left-[40px] top-0 h-full w-[1px] bg-gray-400/40 z-[200] hidden lg:block" />

      {/* Rotated email text somewhere below */}
      <a
        href="https://mail.google.com"
        onClick={handleMailClick}
        className="fixed left-[33px] top-[360px] text-green-600 text-[14px] no-underline hover:text-green-400 hidden lg:block z-[200]"
        style={{ writingMode: 'vertical-lr', fontFamily: 'Poppins' }}
      >
        nittothomas94@gmail.com
      </a>
    </>
  );
};

export default VerticalLineLeft;
