import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      className="border border-gray-200 hover:border-purple-600  rounded-xl mb-3 overflow-hidden duration-300 shadow-sm hover:shadow-md transition-colors"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Header */}
      <motion.button
        onClick={onClick}
        className={`flex justify-between items-center w-full p-6 cursor-pointer text-left ${
          isOpen ? "" : "hover:bg-zinc-500/30 hover:text-purple-600"
        }`}
        whileTap={{ scale: 0.99 }}
      >
        <h3 className="text-lg sm:text-xl font-medium ">{question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-gray-500 ${isOpen ? "text-purple-600" : ""}`}
        >
          <ChevronDown size={24} strokeWidth={2} />
        </motion.span>
      </motion.button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.2,
                },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-300 bg-zinc-500/30">
              <div className="border-t border-purple-600 mb-4"></div>
              <p className="text-base sm:text-lg leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CustomAccordion = () => {
  const [openItems, setOpenItems] = useState([0]);

  const toggleAccordion = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end web application development using React, Node.js, Express, Supabase, MySQL, PostgreSQL, and MongoDB. I deliver fast, secure, and scalable solutions tailored to your business needs.",
    },
    {
      title: "Responsive & Interactive UI Design",
      description:
        "Designing modern, mobile-first user interfaces with smooth animations, intuitive layouts, and exceptional user experience across all devices.",
    },
    {
      title: "Backend API Development",
      description:
        "Building secure and high-performance RESTful APIs with Node.js and Express, integrating seamlessly with relational and NoSQL databases.",
    },
    {
      title: "Database Architecture & Optimization",
      description:
        "Designing, managing, and optimizing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases to ensure speed, reliability, and data integrity.",
    },
    {
      title: "Authentication & Authorization",
      description:
        "Implementing secure user authentication and role-based authorization using Supabase and JWT to protect your application and user data.",
    },
    {
      title: "Cloud Deployment & CI/CD",
      description:
        "Deploying applications with cloud platforms like AWS and Vercel, and automating workflows using GitHub Actions for fast, reliable releases.",
    },
    {
      title: "Real-Time Features",
      description:
        "Integrating real-time capabilities such as live chats, instant notifications, and live data updates using Supabase and WebSocket technologies.",
    },
    {
      title: "Machine Learning Integration",
      description:
        "Enhancing applications with machine learning-powered features like intelligent search, image classification, and data-driven recommendations.",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "Offering flexible support packages:\n\n• Basic: 30-day post-launch bug fixes\n• Standard: 3-month maintenance and minor updates\n• Premium: Continuous support with priority response and regular improvements",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto   overflow-hidden ">

      <div className="absolute top-100 left-20 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-25 left-20 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-2/4 right-20 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>
     
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1]"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about my development services and
            process
          </p>
        </div>

        <div className="space-y-3 max-w-7xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              question={item.title}
              answer={item.description}
              isOpen={openItems.includes(index)}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
