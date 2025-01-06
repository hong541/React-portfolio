import PortoCard from "./component/PortoCard";

const Portfolio = () => {
  return (
    <div
      className="flex flex-col items-center p-8"
      id="portfolio">
      <h1 className="textx-black text-3xl font-bold">My Portfolio</h1>
      <PortoCard />
    </div>
  );
};

export default Portfolio;
