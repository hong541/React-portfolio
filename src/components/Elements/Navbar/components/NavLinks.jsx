import { Link } from "react-router-dom";

const NavLinks = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row gap-3 items-center">
      <Link
        to="#home"
        onClick={() => handleScroll("home")}
        className="text-white font-semibold text-xl underline underline-offset-1">
        Home
      </Link>
      <Link
        to="#about"
        onClick={() => handleScroll("about")}
        className="text-white font-semibold text-xl underline underline-offset-1">
        About
      </Link>
      <Link
        to="#portfolio"
        onClick={() => handleScroll("portfolio")}
        className="text-white font-semibold text-xl underline underline-offset-1">
        Portfolio
      </Link>
      <Link
        to="#contact"
        onClick={() => handleScroll("contact")}
        className="text-white font-semibold text-xl underline underline-offset-1">
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
