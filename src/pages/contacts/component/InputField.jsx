const InputField = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-teal-500 outline-none"
    />
  );
};

export default InputField;
