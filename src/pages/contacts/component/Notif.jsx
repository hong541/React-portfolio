const Notif = ({ type, text, isVisible }) => {
  return (
    <div
      className={`px-4 py-3 rounded-lg transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white p-4 mb-8`}>
      <p>{text}</p>
    </div>
  );
};

export default Notif;
