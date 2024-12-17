"use client";
import BackToTopButton from "@/components/BackToTopButton";
import React from "react";
import { FaEye, FaCode } from "react-icons/fa"; // Install react-icons if not already installed

interface Project {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
    {
      title: "E-commerce Website",
      description:
        "An E-commerce website featuring product catalogs, cart functionalities, and a responsive UI using React and Tailwind.",
      liveLink: "https://your-ecommerce-site-live-link.com",
      githubLink: "https://github.com/your-username/ecommerce-website",
    },
    {
    title: "Resume Builder",
    description:
      "I create a Resume Builder to create a personal resume using HTML, Tailwind CSS, and Next.js.",
    liveLink: "https://your-resume-builder-live-link.com",
    githubLink: "https://github.com/your-username/resume-builder",
  },
  {
    title: "Dynamic Resume",
    description:
      "A Dynamic Resume application where users can generate and customize resumes using React and Tailwind CSS.",
    liveLink: "https://your-dynamic-resume-live-link.com",
    githubLink: "https://github.com/your-username/dynamic-resume",
  },
  {
    title: "Weather App",
    description:
      "A Weather App that fetches real-time weather data using APIs and displays forecasts in an elegant UI.",
    liveLink: "https://your-weather-app-live-link.com",
    githubLink: "https://github.com/your-username/weather-app",
  },
  {
    title: "Simple Calculator",
    description: "A Simple Calculator built using Tailwind CSS and TypeScript.",
    liveLink: "https://your-simple-calculator-live-link.com",
    githubLink: "https://github.com/your-username/simple-calculator",
  },
  {
    title: "Digital Watch",
    description:
      "I create this digital Watch using HTML, CSS, and TypeScript.",
    liveLink: "https://your-digital-watch-live-link.com",
    githubLink: "https://github.com/your-username/digital-watch",
  },
  {
    title: "To Do List",
    description: "A To DO List using HTML, CSS, and JavaScript.",
    liveLink: "https://your-todo-list-live-link.com",
    githubLink: "https://github.com/your-username/todo-list",
  },
  {
    title: "Chat Application",
    description:
      "A real-time Chat Application built with WebSockets, React, and Tailwind CSS to enable instant communication.",
    liveLink: "https://your-chat-application-live-link.com",
    githubLink: "https://github.com/your-username/chat-application",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className=" min-h-screen text-gray-400 px-4 py-10">
     
      {/* Section Heading */}
      <div className="mb-20 text-left lg:ml-12 lg:mt-12 p-4 mt-8">
        <h2 className="text-4xl font-bold mb-1 text-gray-400">My Projects</h2>
        <div className="w-52 h-1 bg-blue-500 mb-1"></div>
        <div className="w-32 h-1 bg-blue-500 mb-10"></div>
        {/* Projects Intro */}
<div className="mb-10 text-left max-w-3xl">
<p className="text-gray-300 text-lg leading-relaxed lg:ml-24 lg:mt-20 p-4">
    Welcome to my projects showcase! Here, you'll find a collection of web 
    applications and tools that I have built using modern technologies like 
    <span className="text-cyan-500 font-medium"> React.js </span>, 
    <span className="text-cyan-500 font-medium"> Tailwind CSS </span>, 
    <span className="text-cyan-500 font-medium"> TypeScript </span>, and 
    <span className="text-cyan-500 font-medium"> Next.js </span>. Each project highlights 
    my ability to solve problems, write clean code, and build responsive, interactive, 
    and user-friendly interfaces. Click on the <span className="text-cyan-500">Eye Icon</span> 
    to explore the live project or the <span className="text-cyan-500">Ccode Icon </span> to view 
    the source code on <span className="text-cyan-500"> GitHub </span>.  
  </p>

</div>
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-gray-800 rounded-lg shadow-lg w-full max-w-sm p-6 text-center overflow-hidden"
          >
            {/* Content */}
            <div className="transition-opacity duration-500 opacity-100 group-hover:opacity-20">
              <h3 className="text-2xl font-semibold mb-2 text-green-400">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>

            {/* Hover Icons */}
            <div className="absolute inset-0 flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gray-800 bg-opacity-90">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-4xl hover:text-green-400 transition-transform transform hover:scale-110"
              >
                <FaEye />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-4xl hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <FaCode />
              </a>
            </div>
          </div>
        ))}
      </div>


      {/* Footer */}
      <footer className="mt-20 text-center text-gray-400 text-sm">
        © Copyright 2025–Present. Muhammad Sufyan Bandhani. <br />
        Made with <span style={{ color: "red" }}>❤</span> by <br />
        <span className="text-red-500 font-bold">Muhammad Sufyan</span>
      </footer>
      <BackToTopButton/>
    </div>
  );
};

export default ProjectsPage;