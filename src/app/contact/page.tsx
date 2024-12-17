import BackToTopButton from "@/components/BackToTopButton";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const ContactMe: React.FC = () => {
  return (
    <div className="min-h-screen p-5 mt-10 md:mt-10 md:ml-20 lg:ml-24 space-y-16">
      {/* Title */}
      <div className="text-left w-full pl-10 mt-12">
        <h1 className="text-5xl font-bold border-b-4 border-blue-500 mb-1 inline-block">Contact Me</h1>
        <div className="h-1 w-24 mb-10 bg-blue-500"></div>
      </div>

      {/* Address Section */}
      <div className="space-y-12 sm:pt-20 text-gray-400 text-center">
        {/* Address */}
        <div>
          <FiMapPin className="w-8 h-8 text-blue-500 mx-auto" />
          <p className="text-xl font-semibold">Address</p>
          <p>Karachi, Pakistan</p>
        </div>

        {/* Phone */}
        <div>
          <FiPhone className="w-8 h-8 text-blue-500 mx-auto" />
          <p className="text-xl font-semibold">Call Us On</p>
          <p>+92315-2815228</p>
        </div>

        {/* Email */}
        <div>
          <FiMail className="w-8 h-8 text-blue-500 mx-auto" />
          <p className="text-xl font-semibold">Email</p>
          <p>sufyanbandhani123@gmail.com</p>
        </div>
      </div>

      {/* Form Section */}
      <section>
        <div className="h-screen justify-center items-center mx-auto max-w-3xl p-5">
          {/* Header */}
          <div className="mb-20 text-left">

          <div className="text-left w-full mt-12">
        <h1 className="text-5xl font-bold border-b-4 border-blue-500 mb-1 inline-block">Get In Touch</h1>
        <div className="h-1 w-36 mb-10 bg-blue-500"></div>
      </div>
            <p className=" mb-10 text-gray-400 lg:pl-8">
              Ready to start your next project with me? Have questions about my
              services? Contact me today and I'll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-16">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                * Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-b-2 border-gray-500 bg-transparent text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                * E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-b-2 border-gray-500 bg-transparent text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full border-b-2 border-gray-500 bg-transparent text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                * Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border-b-2 border-gray-500 bg-transparent text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-transparent text-white px-6 py-2 border border-blue rounded-full hover:bg-gray-300 hover:text-blue-500 transition"
            >
              Send
              <span>&rarr;</span>
            </button>
          </form>
          <div className="mt-10 mb-8 pb-10 text-sm text-gray-500">
            * Marked fields are required to fill.
          </div>
          <footer className="pt-8 pb-6 text-center text-gray-500 text-sm">
          © Copyright 2025–Present. Muhammad Sufyan Bandhani. <br />
          Made with <span style={{ color: "red" }}>❤</span> by <br />
          <span style={{ color: "red" }} className="font-bold">
            Muhammad Sufiyan
          </span>
        </footer>
        </div>
      </section>

    <BackToTopButton/>
    
    </div>
  );
};

export default ContactMe;