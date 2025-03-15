import './verticallineleft.css';

const VerticalLineLeft = () => {
  const handleMailClick = e => {
    e.preventDefault(); // Prevent the default `mailto` behavior
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=nittothomas94@gmail.com',
      '_self'
    );
  };

  return (
    <div className="vertical-line-left">
      <a href="https://mail.google.com" onClick={handleMailClick}>
        nittothomas94@gmail.com
      </a>
    </div>
  );
};

export default VerticalLineLeft;
