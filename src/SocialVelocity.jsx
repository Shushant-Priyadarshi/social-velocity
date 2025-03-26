import { useState } from "react";
import { motion } from "framer-motion";

export default function VelocityBusiness() {
  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Social Media Management",
      icon: "📲",
      desc: "Boost engagement with expert social media strategies.",
    },
    {
      title: "Web/App Development",
      icon: "💻",
      desc: "Cutting-edge websites and apps tailored to your business needs.",
    },
    {
      title: "Performance Marketing",
      icon: "💪",
      desc: "Maximize ROI with data-driven performance marketing campaigns.",
    },
    {
      title: "Influencer Marketing",
      icon: "🌟",
      desc: "Leverage influencers to expand your brand reach and credibility.",
    },
    {
      title: "Video Editing",
      icon: "🎬",
      desc: "Create stunning visuals that captivate and convert audiences.",
    },
    {
      title: "SEO Optimization",
      icon: "📈",
      desc: "Improve search rankings and online visibility with expert SEO techniques.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans relative overflow-hidden">
      {/* Soft Glowing Light Effect */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-1/2 h-[400px]   bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-30"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg shadow-lg py-4 px-8 flex justify-between items-center z-50">
        <h1 className="text-3xl font-bold tracking-wide">
          Social{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Velocity
          </span>
        </h1>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
        <ul
          className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full bg-black bg-opacity-90 md:bg-transparent md:w-auto flex-col md:flex-row items-center transition-transform duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {["Home", "Services", "About", "Contact"].map((item, index) => (
            <li key={index} className="py-2 md:py-0">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-400 transition cursor-pointer block md:inline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative text-center py-48 text-white overflow-hidden"
        variants={fadeInUpAnimation}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-wide relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          variants={fadeInUpAnimation}
        >
          Turbocharge Your Online Presence⚡️
        </motion.h1>
        <p className="mt-6 font-semibold text-xl md:text-2xl max-w-3xl mx-auto relative z-10">
          A Brand That Takes Care Of Brands
        </p>
        <motion.a
          className="mt-6 inline-block px-8 py-4 text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          href="https://wa.me/message/RCH5JCAF67RKO1" // Replace with actual WhatsApp number
          target="_target"
          rel="noopener noreferrer"
        >
          Get Started
        </motion.a>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-24 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-10 bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg rounded-xl border border-gray-600 hover:shadow-2xl transition flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-5xl">{service.icon}</span>
              <h3 className="text-2xl font-semibold mt-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-2 text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 px-6 bg-gray-900 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          About Us
        </h2>
        <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed ">
          Powering Brands with Digital Excellence At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Social Velocity</span>, we are
          more than just a marketing agency—we are your growth partners. Our
          mission is to help businesses dominate the digital space with
          high-impact marketing solutions that drive real results. We specialize
          in boosting online presence, increasing customer trust, and
          accelerating business growth through cutting-edge digital strategies.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 px-6 bg-black text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Get in Touch
        </h2>
        <p className="mt-6 text-lg">velocitymarketing121@gmail.com</p>
        <p className="mt-2 text-lg">+91 73949 82690</p>
        <p className="mt-3">
          {" "}
          <a
            className="mt-2 text-lg bg-white text-black cursor-pointer py-1 px-2 rounded-lg"
            href="https://www.instagram.com/socialvelocity_/"
            target="_blank"
          >
            socialvelocity_
          </a>
        </p>
      </motion.section>
    </div>
  );
}
