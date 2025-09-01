import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import CountCard from "./CountCard";
import ContactForm from "./ContactForm";
import { MessageCircleCodeIcon } from "lucide-react";

export const Count = () => {
  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  // Prevent background scrolling when contact form is open (same as Navbar)
  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showContact]);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-ten-rho.vercel.app/api/projects/api/counts"
        );
        const processedData = response.data.map((item) => ({
          ...item,
          exprience: Number(item.exprience),
          projects: Number(item.projects),
          customers: Number(item.customers),
        }));
        setCount(processedData);
      } catch (error) {
        console.error("Error fetching counts:", error);
        setCount([{ _id: "1", exprience: 2, projects: 15, customers: 5 }]);
      } finally {
        setLoading(false);
      }
    };
    fetchCount();
  }, []);

  const renderSkeleton = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-24 bg-gray-700 rounded-xl animate-pulse sm:h-32"
    ></motion.div>
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
      {/* Skeleton Loading */}
      {loading
        ? [1, 2, 3].map((index) => (
            <React.Fragment key={index}>{renderSkeleton()}</React.Fragment>
          ))
        : count.length > 0 && (
            <>
              <CountCard
                count={Number(count[0].exprience)}
                label="Years of Experience"
                color="blue-600"
              />
              <CountCard
                count={Number(count[0].projects)}
                label="Completed Projects"
                color="purple-600"
              />
              <CountCard
                count={Number(count[0].customers)}
                label="Satisfied Clients"
                color="purple-600"
              />
            </>
          )}

      {/* Contact Button */}
      {loading ? (
        [1].map((index) => (
          <React.Fragment key={index}>{renderSkeleton()}</React.Fragment>
        ))
      ) : (
        <motion.button
          whileHover={{ y: -5 }}
          onClick={() => setShowContact(true)}
          className="tooltip relative hover:text-purple-700 gap-2 overflow-hidden cursor-pointer flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          data-tip="Contact Me" // Corrected tooltip text
        >
          <MessageCircleCodeIcon className="w-15 h-15" />
          <p className="flex items-center text-lg hover:scale-105 transition-all duration-300">
            Contact Me
          </p>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 blur-3xl bg-pink-600 rounded-full opacity-50 lg:opacity-30"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 blur-3xl bg-pink-600 rounded-full opacity-50 lg:opacity-30"></div>
        </motion.button>
      )}

      {/* Contact Form Popup - same as Navbar */}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </div>
  );
};
