import NavImg from "./components/NavImg";
import NavLinks from "./components/NavLinks";
const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky top-0 bg-gradient-to-r from-gray-600 border-b-0">
      <div className="relative flex h-16 items-center justify-between">
        <NavLinks />

        <NavImg />
      </div>
    </div>
  );
};

export default Navbar;
