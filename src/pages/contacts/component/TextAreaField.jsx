const TextAreaField = ({ name, placeholder, rows }) => {
  return (
    <textarea
      name={name}
      required
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
  );
};

export default TextAreaField;
