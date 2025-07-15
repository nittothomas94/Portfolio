const Input = ({ type, className = '', label, id, onChange }) => {
  const isMessage = id === 'messageInput'; // ✅ Match the case

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-white font-medium">{label}</label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        className={`w-full px-3 py-2 !bg-white rounded-md text-black text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 ${
          isMessage ? 'h-[100px] resize-y box-border' : 'h-[35px]'
        } ${className}`}
      />
    </div>
  );
};

export default Input;
