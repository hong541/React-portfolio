import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialIcon = ({ type, href }) => {
  const icons = {
    github: <FaGithub />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedinIn />,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-500 hover:text-teal-600 text-2xl transition">
      {icons[type]}
    </a>
  );
};

export default SocialIcon;
