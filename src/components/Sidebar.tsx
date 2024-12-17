import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineAppstoreAdd, AiOutlineContacts, AiOutlineMail, } from "react-icons/ai";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to close the sidebar when a link is clicked
    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* Burger Icon (Menu Button) */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 bg-transparent text-white fixed top-4 left-4 z-50 opacity-80 rounded-md"
            >
                <AiOutlineMenu size={24} />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-black/90 text-white transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out w-64 z-40`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)}>
                        <AiOutlineClose size={24} />
                    </button>
                </div>

                {/* Menu Links */}
                <div className="p-4">
                    <ul className="space-y-6 md:space-y-2 lg:space-y-6">
                        <li className="flex items-center space-x-2">
                            <AiOutlineHome />
                            <a
                                href="/"
                                className="hover:text-gray-300"
                                onClick={closeSidebar} // Close sidebar on click
                            >
                                Home
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <AiOutlineUser />
                            <a
                                href="/about"
                                className="hover:text-gray-300"
                                onClick={closeSidebar} // Close sidebar on click
                            >
                                About
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <AiOutlineAppstoreAdd />
                            <a
                                href="/services"
                                className="hover:text-gray-300"
                                onClick={closeSidebar} // Close sidebar on click
                            >
                                Services
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FiBriefcase />
                            <a
                                href="/projects"
                                className="hover:text-gray-300"
                                onClick={closeSidebar} // Close sidebar on click
                            >
                                Projects
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <AiOutlineMail />
                            <a
                                href="/contact"
                                className="hover:text-gray-300"
                                onClick={closeSidebar} // Close sidebar on click
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-72 left-5 md:bottom-24 lg:bottom-48">
                <div className="text-center text-xl font-bold mb-2">
  <span className="text-yellow-500">★</span> Social Links <span className="text-yellow-500">★</span>
</div>
                    <div className="flex space-x-4 ml-2">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <FaInstagram size={24} />
                        </a>

                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <FaFacebook size={24} />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-5 left-5 text-white">
  Made with <span style={{ color: "red" }}>❤</span> by <br />
  <span style={{ color: "red" }} className="font-bold">Muhammad Sufiyan</span>
</div>
            </div>
        </div>
    );
};

export default Sidebar;