import { useState } from "react";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const Skill = () => {
  const skills = [
    {
      name: "Express",
      icon: <SiExpress className="w-10 h-10 text-gray-700" />,
      description:
        "Express is a web application framework for Node.js that provides a set of tools and features for building web applications and APIs. It is known for its simplicity, flexibility, and ease of use.",
      bgColor: "bg-gray-600",
      buttonColor: "bg-gray-700 hover:bg-gray-800",
      skillhref: "https://expressjs.com/",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-700 w-10 h-10" />,
      description:
        "MongoDB is a NoSQL database that provides a flexible and scalable solution for storing and retrieving data. It is known for its high performance, scalability, and ease of use.",
      bgColor: "bg-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700",
      skillhref: "https://www.mongodb.com/",
    },
    {
      name: "React",
      icon: <SiReact className="w-10 h-10 text-blue-500" />,
      description:
        "React is a JavaScript library for building user interfaces. It is known for its simplicity, flexibility, and ease of use.",
      bgColor: "bg-blue-700",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
      skillhref: "https://react.dev/",
    },
    {
      name: "NodeJS",
      icon: <SiNodedotjs className="w-10 h-10 text-green-800" />,
      description:
        "Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is known for its simplicity, scalability, and ease of use.",
      bgColor: "bg-green-600",
      buttonColor: "bg-green-700 hover:bg-green-800",
      skillhref: "https://nodejs.org/en/",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="w-10 h-10 text-blue-600" />,
      description:
        "TailwindCSS is a utility-first CSS framework that provides a set of pre-defined classes that can be used to style HTML elements. It is known for its simplicity, flexibility, and ease of use.",
      bgColor: "bg-blue-400",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      skillhref: "https://tailwindcss.com/",
    },
  ];
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  return (
    <div
      className={`py-10 w-full min-h-screen ${selectedSkill.bgColor} text-slate-200`}>
      <h2 className="text-center text-3xl font-bold mb-6">My Skills</h2>
      <div className="flex justify-center gap-6 mb-8">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className={`p-4 border-2 rounded-lg transition ${
              selectedSkill.name === skill.name
                ? "border-blue-500 text-white"
                : "border-gray-500"
            }`}>
            {skill.icon}
          </button>
        ))}
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">{selectedSkill.name}</h3>
        <p className=" max-w-lg mx-auto">{selectedSkill.description}</p>
      </div>
      <div className="text-center mt-14">
        <p>For Documentations</p>
        <a
          href={selectedSkill.skillhref}
          target="_blank">
          <button
            className={`w-1/8 px-6 py-3 ${selectedSkill.buttonColor} rounded-lg text-white shadow-md transition transform hover:-translate-y-1 hover:scale-105 mt-6`}>
            See More...
          </button>
        </a>
      </div>
    </div>
  );
};

export default Skill;
