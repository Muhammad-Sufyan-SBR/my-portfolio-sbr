"use client";
import BackToTopButton from "@/components/BackToTopButton";
import { useState } from "react";

// Services Data
const services = [
  {
    title: "Web Development",
    content:
      "Every business has unique requirements, and our custom software development services are designed to address those specific needs. We create tailored software solutions that streamline your processes, boost efficiency, and align perfectly with your objectives. Our goal is to provide you with scalable and robust software that grows with your business.",
  },
  {
    title: "UI/UX Design",
    content:
      "We specialize in creating visually appealing and user-centric designs that elevate your brand and enhance the overall user experience. Our design process focuses on understanding your audience, ensuring seamless navigation, and delivering interactive interfaces. Whether it’s a website, mobile app, or desktop application, we aim to make every interaction intuitive and engaging, leaving a lasting impression on your users.",
  },
  {
    title: "Mobile App Development",
    content:
      "We bring your ideas to life with innovative mobile applications for Android and iOS platforms. Our apps are designed to be high-performing, user-friendly, and aligned with your business goals. Whether it’s an e-commerce platform, social media app, or a utility tool, we ensure your app stands out in a competitive market.",
  },
  {
    title: "Desktop Application Development",
    content:
      "We offer top-notch desktop application development services to help you optimize your operations. Our desktop applications are built to deliver high performance, reliability, and user-friendliness. Whether you need a standalone application or a system-integrated solution, we ensure it aligns with your goals and improves your workflows.",
  },
  {
    title: "Technology Consulting",
    content:
      "Making the right technology decisions is critical for success, and our technology consulting services are here to guide you. We provide expert advice on the latest trends, tools, and strategies, helping you choose solutions that best fit your business model. Let us empower you to stay ahead in an ever-evolving digital landscape.",
  },
  {
    title: "Custom Software Development",
    content:
      "Custom software solutions tailored to your business needs, ensuring efficiency and scalability.",
  },
];

// Main Component
const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-400 p-4 md:p-8">
       <div className="max-w-4xl mx-auto">
        {/* Services Section */}
        <div className="text-left w-full mt-16 pl-6">
        <h1 className="text-5xl font-bold border-b-4 border-blue-500 mb-1 inline-block">Services</h1>
        <div className="h-1 w-24 mb-12 bg-blue-500"></div>
      </div>

        <p className="text-gray-400 pl-12 pr-8">
          We specialize in delivering high-quality solutions tailored to your
          business needs. Our expertise spans custom software development,
          creative design, and powerful digital platforms that drive results. By
          leveraging the latest technologies, we help streamline operations,
          enhance user experiences, and support your growth. With a focus on
          innovation and client satisfaction, we aim to be your trusted partner
          in achieving success in the digital world.
        </p>

        {/* Tech Solutions Section */}
        <div className="text-left w-full mt-12 pl-2">
          <h1 className="text-5xl font-bold border-b-4 border-blue-500 mb-1 text-left inline-block">
            Comprehensive Tech Solution
          </h1>
          <div className="h-1 w-48 mb-10 bg-blue-500"></div>
        </div>

        <p className="text-gray-400 pl-12 lg:mb-20 lg:mt-16 mb-16 pr-6">
          From concept to deployment, I offer a range of tailored tech services
          designed to address unique business challenges. Explore my services
          below to find how I can help elevate your business:
        </p>

        {/* Services Dropdown */}
        <div className="space-y-12 md:p-8 p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-blue-400 rounded-lg overflow-hidden"
            >
              {/* Dropdown Button */}
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold bg-transparent hover:bg-gray-500 focus:outline-none"
              >
                {service.title}
                <span>{openIndex === index ? "⤴" : "⬇"}</span>
              </button>

              {/* Dropdown Content */}
              {openIndex === index && (
                <div className="px-4 py-3 bg-transparent text-gray-300">
                  {service.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center text-gray-500 text-sm">
          © Copyright 2025–Present. Muhammad Sufyan Bandhani. <br />
          Made with <span style={{ color: "red" }}>❤</span> by <br />
          <span style={{ color: "red" }} className="font-bold">
            Muhammad Sufiyan
          </span>
        </footer>
      </div>
      <BackToTopButton/>
    </div>
  );
};

export default ServicesPage;