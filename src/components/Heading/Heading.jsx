import './Heading.css';

const Heading = ({ text }) => {
  return (
    <h1 className="heading">
      {text.split('').map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default Heading;
