import './Button.css';

const Button = ({ text, className, onClick }) => {
  return (
    <div className="button">
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
