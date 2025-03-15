import './Input.css';

const Input = ({ type, className, label, id, onChange }) => {
  return (
    <div className="input-div">
      <label>{label}</label>
      <input type={type} className={className} id={id} onChange={onChange} />
    </div>
  );
};

export default Input;
