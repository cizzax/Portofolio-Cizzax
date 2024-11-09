import React, { useState } from "react";

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      data-aos="fade-up"
      className="border rounded-lg overflow-hidden bg-teal-900 text-white shadow-lg cursor-pointer flex flex-col transition-transform transform hover:scale-105"
      onClick={() => setShowDescription(!showDescription)}
    >
      <img
        src={`/image/${imageUrl}`}
        alt={title}
        className="w-full h-64 object-cover transition-all duration-300"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div
          className={`mt-2 text-sm transition-all duration-300 ease-in-out ${
            showDescription ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

const SkillsAndProjects: React.FC = () => {
  const skills = [
    { name: "HTML", icon: "html.png" },
    { name: "MySQL", icon: "mysql.png" },
    { name: "JavaScript", icon: "JS.png" },
    { name: "React", icon: "react.png" },
    { name: "Node.js", icon: "njs.png" },
    { name: "TypeScript", icon: "ts.png" },
  ];

  const tools = [
    { name: "GitHub", icon: "github.png" },
    { name: "VsCode", icon: "vcode.png" },
    { name: "Figma", icon: "figma.png" },
    { name: "Postman", icon: "postman.png" },
  ];

  const projects = [
    {
      title: "MES4N - BE",
      description:
        "A web application project at SMKN 4 Bandung that helps students order products from the canteen, cooperative, and water gallon services.",
      imageUrl: "MESAN.png",
    },
    {
      title: "FA PEDIA - UI/UX",
      description:
        "A gaming boost service that helps players level up their stars or points without having to play directly.",
      imageUrl: "fapedia.png",
    },
    {
      title: "CHESTFROG - GAMEDEV",
      description:
        "A chestfrog game developed in Unity, where players complete missions inside the chest.",
      imageUrl: "kurakura.png",
    },
    {
      title: "ONLINESHOP - FE",
      description:
        "Onlineshop is an e-commerce platform that allows users to browse and purchase a wide range of products with ease.",
      imageUrl: "masadepan.png",
    }
    ,
  ];

  return (
    <section
      id="project"
      className="min-h-screen w-full bg-gradient-to-b from-teal-700 via-gray-800 to-gray-900 text-white flex flex-col items-center pt-12"
    >
      <h2
        data-aos="fade-down"
        className="text-4xl font-bold text-teal-500 mb-8"
      >
        Project
      </h2>

      <div className="flex w-full px-8 sm:px-12 md:px-16 lg:px-20 space-x-8 sm:space-x-10 md:space-x-12">
        {/* Skills & Tools Section */}
        <div
          data-aos="fade-right"
          className="w-full sm:w-1/3 md:w-1/4 bg-teal-800 p-6 rounded-lg shadow-lg flex flex-col items-center mt-20 mb-12"
        >
          <h3 className="text-2xl font-bold text-teal-400 mb-4">Skills & Tools</h3>
          <div className="space-y-8 w-full">
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  className="flex flex-col items-center group relative"
                >
                  <img
                    src={`/image/${skill.icon}`}
                    alt={skill.name}
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-teal-300 text-sm mt-2 group-hover:text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h4 className="text-lg font-semibold text-teal-300">Tools</h4>
              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    className="flex flex-col items-center group relative"
                  >
                    <img
                      src={`/image/${tool.icon}`}
                      alt={tool.name}
                      className="w-20 h-20 object-contain"
                    />
                    <span className="text-teal-300 text-sm mt-2 group-hover:text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Column */}
        <div
          data-aos="fade-left"
          className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="max-w-md mx-auto"> {/* Perbesar lebar proyek */}
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsAndProjects;
