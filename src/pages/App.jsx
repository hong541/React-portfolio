import About from "./about/About";
import Contact from "./contacts/Contact";
import Home from "./Home";
import Portfolio from "./portfolio/Portfolio";

const App = () => {
  return (
    <div className="bg-slate-50">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
