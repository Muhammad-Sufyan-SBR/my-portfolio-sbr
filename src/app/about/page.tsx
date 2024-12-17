"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaPhp, FaAws, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiSharp, SiDigitalocean } from "react-icons/si";
import BackToTopButton from "@/components/BackToTopButton";

const educationData = [
  {
    year: "2020 - 2021",
    title: "Matriculation (Computer Science)",
    description:
      "Completed my matriculation studies in Computer Science at Rakhshinda Public School, where I developed a foundational understanding of programming concepts, problem-solving, and basic computational thinking. This sparked my interest in the world of technology and engineering.",
  },
  {
    year: "2022 - 2023",
    title: "Intermediate (FSC Pre-Engineering)",
    description:
      "Pursued FSC in Pre-Engineering at Government College Forman Nazimabad. During this phase, I honed my analytical and mathematical skills while gaining a strong grasp of engineering concepts, laying the groundwork for advanced technical education.",
  },
  {
    year: "2023 - Present",
    title: "B-Tech in Mechanical Engineering",
    description:
      "Currently enrolled in the B-Tech program in Mechanical Engineering at Indus University. This program has allowed me to dive into the principles of mechanical systems, design, and innovation, fostering my ability to solve real-world engineering challenges.",
  },
  {
    year: "2024 - 2025",
    title: "Generative AI Web3 & Metaverse",
    description:
      "Embarking on an advanced course at the Governor House through GIAIC, I am actively exploring cutting-edge technologies, including Generative AI, Web3, and the Metaverse. This initiative enhances my skills and aligns me with the transformative trends in the tech industry.",
  },
];

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Vue", icon: <FaVuejs className="text-green-500" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "C#", icon: <SiSharp className="text-purple-600" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-700" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "DigitalOcean", icon: <SiDigitalocean className="text-blue-500" /> },
];


const AboutMePage = () => {
  const TEXTS = ["UX/UI DESIGNER", "WEB DEVELOPER", "FRONT-END DEVELOPER", "BACK-END DEVELOPER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-400 p-4 ">
      {/* About Me Heading */}
      <div className="text-left w-full pl-10 mt-12">
        <h1 className="text-5xl font-bold border-b-4 border-blue-500 mb-1 inline-block">About Me</h1>
        <div className="h-1 w-24 mb-10 bg-blue-500"></div>
      </div>

      {/* Profile Picture with Rotating Border */}
      <div className="relative w-56 h-56 mb-6 flex items-center mt-10 justify-center">
        <div className="absolute w-64 h-64 border-4 border-blue-400 rounded-full animate-spin-slow"></div>
        <div className="absolute w-72 h-72 border-t-4 border-blue-400 rounded-full animate-spin-reverse"></div>
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src="/sufyan.jpg" // Replace with your image path
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Greeting */}
      <div className="text-center text-gray-400">
        <h2 className="text-2xl md:text-3xl font-light mb-4 mt-8">Hello, It's Me</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Muhammad Sufiyan</h1>
      </div>

      {/* Rotating Text */}
      <div className="text-3xl font-semibold mb-6">
        AND I'M{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={TEXTS[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400"
          >
            {TEXTS[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* About Me Paragraph */}
      <div className="max-w-2xl px-4 text-center">
        <p className="text-lg leading-relaxed text-gray-300">
          I’m Muhammad Sufyan, a dedicated student at the Governor Initiative, actively exploring the transformative domains of{" "}
          <span className="text-cyan-400 font-semibold">Cloud Computing</span>,{" "}
          <span className="text-cyan-400 font-semibold">Applied Generative AI</span>, and{" "}
          <span className="text-cyan-400 font-semibold">Web 3.0</span>. As a passionate{" "}
          <span className="text-cyan-400 font-semibold">web developer</span>, I specialize in leveraging modern web technologies like{" "}
          <span className="text-cyan-400 font-semibold">HTML, CSS, JavaScript, TypeScript, React,</span> and{" "}
          <span className="text-cyan-400 font-semibold">Next.js</span> to craft responsive, intuitive, and user-centric digital experiences.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-300">
          I strive to deliver solutions that seamlessly balance high performance and aesthetic appeal. Staying up-to-date with emerging technologies is my priority, 
          and I aim to create impactful, engaging digital experiences that exceed user expectations.
        </p>
      </div>
       
      <div className="text-left w-full pl-10 mt-24">
        <h1 className="text-5xl font-bold border-b-4 border-blue-500 mb-1 inline-block">Skills</h1>
        <div className="h-1 w-24 mb-10 bg-blue-500"></div>
      </div>

      <section className="text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold mb-8 text-center">
          Skills I have acquired over the years and days.
        </h2>
        <p className="mb-12 text-gray-400 text-center max-w-2xl mx-auto">
          Over the course of my education and career, I have acquired many
          skills that are essential to the job. Some of my many skills include:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 px-6 py-8 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-xl"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <div className="text-left w-full pl-10 mt-12">
        <h1 className="text-5xl font-bold border-b-4 border-blue-500 mb-1 inline-block">My Education</h1>
        <div className="h-1 w-36 mb-10 bg-blue-500"></div>
      </div>


<div className="text-white py-12 px-6 sm:px-12">

      <div className="relative border-l-4 border-[#00A7E1] ml-6">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Circle */}
            <div className="absolute -left-3 top-0 bg-[#00A7E1] w-6 h-6 rounded-full"></div>

            <div>
              <p className="text-lg font-semibold text-[#00A7E1] mb-2">
                {edu.year}
              </p>
              <div className="bg-[#0085B5] p-4 rounded-lg shadow-lg">
                <h3 className="text-white text-xl font-semibold">
                  {edu.title}
                </h3>
                <p className="text-gray-200 mt-2">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <footer className="mt-24 text-center text-gray-500 text-sm">
          © Copyright 2025–Present. Muhammad Sufyan Bandhani. <br />
          Made with <span style={{ color: "red" }}>❤</span> by <br />
          <span style={{ color: "red" }} className="font-bold">
            Muhammad Sufiyan
          </span>
        </footer>
        <BackToTopButton/>
    </div>

  );
};

export default AboutMePage;