import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center items-center">
        <h2 className="text-lg font-semibold">Hong</h2>
        <p className="text-sm mt-2">
          ©{new Date().getFullYear()} Hong. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition duration-200">
            Privacy Policy
          </Link>
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition duration-200">
            Terms of Service
          </Link>
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
