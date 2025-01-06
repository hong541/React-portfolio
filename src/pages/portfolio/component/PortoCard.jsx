import { Link } from "react-router-dom";

const PortoCard = () => {
  const portfolio = [
    {
      id: 1,
      title: "Website Tanpa Mu",
      description:
        "A simple responsive website use HTML, CSS, and JS. Click Button if you want to see this website",
      image: "/src/components/public/image/portfolio1.png",
      link: "https://hong541.github.io/Project-1/",
    },
    {
      id: 2,
      title: "My Landing Page",
      description:
        "A simple landing page use HTML, Bootstrap, and JS. Click Button if you want to see this website",
      image: "/src/components/public/image/portfolio2.png",
      link: "https://hong541.github.io/Project-4/",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "This is an individual portfolio that I built using the Tailwind CSS framework. Click Button if you want to see this website",
      image: "/src/components/public/image/portfolio3.png",
      link: "https://hong541.github.io/My-Portfolio/",
    },
    {
      id: 4,
      title: "Company Portfolio",
      description:
        "This is a company portfolio that I built using the Materialize CSS framework with an interesting parallax prefix. Click Button if you want to see this website",
      image: "/src/components/public/image/portfolio4.png",
      link: "https://hong541.github.io/Project-3/",
    },
  ];
  return (
    <div className="flex flex-col gap-6 p-8">
      {portfolio.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-md overflow-hidden max-w-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center items-center">
            <h2 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.description}</p>
            <div className="mt-4">
              <Link to={item.link}>
                <button className="w-1/8 px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg text-white shadow-md transition transform hover:-translate-y-1 hover:scale-105">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortoCard;
