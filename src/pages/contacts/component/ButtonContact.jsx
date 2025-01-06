const ButtonContact = (props) => {
  const { children, isLoading } = props;
  return (
    <button
      disabled={isLoading}
      className={`w-full px-6 py-3  rounded-lg shadow-md transition transform ${
        isLoading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-teal-500 hover:bg-teal-600 text-white hover:-translate-y-1 hover:scale-105"
      }`}>
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          <span className="animate-spin rounded-full h-6 w-6 border-t-transparent border-2 border-white"></span>
          <span>Sending...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonContact;
