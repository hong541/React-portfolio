const Button = (props) => {
  const { children, variant = "bg-black", text = "text-white" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} ${text}`}
      type="submit">
      {children}
    </button>
  );
};

export default Button;
