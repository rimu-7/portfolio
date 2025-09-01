import { Download, ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DownloadButton2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const files = {
    english: "/Mutasim_fuad_rimu_english.pdf",
    chinese: "/Mutasim_fuad_rimu_chinese.pdf",
  };

  const handleDownload = (language) => {
    const fileUrl = files[language];
    if (!fileUrl) return console.error("File not found:", language);

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-full sm:w-auto" ref={menuRef}>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] text-white font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
      >
        <Download className="w-5 h-5" />
        <span>Download Resume</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`
              absolute w-56 sm:w-64 z-50 rounded-xl backdrop-blur-2xl bg-black/70 shadow-lg border border-purple-500/30 overflow-hidden
              left-1/2 transform -translate-x-1/2
              bottom-full mb-2 sm:top-full sm:mt-2 sm:bottom-auto
            `}
          >
            {/* Glowing accents */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 blur-3xl bg-pink-600 rounded-full opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 blur-3xl bg-blue-600 rounded-full opacity-30"></div>

            <div className="relative flex flex-col text-white text-sm">
              <button
                onClick={() => handleDownload("english")}
                className="flex items-center justify-between px-4 py-3 hover:bg-purple-600/30 transition"
              >
                <span>English</span>
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDownload("chinese")}
                className="flex items-center justify-between px-4 py-3 hover:bg-purple-600/30 transition"
              >
                <span>中文</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DownloadButton2;
