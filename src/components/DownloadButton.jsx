import { Download, ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DownloadButton = () => {
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

  // Close the menu when clicking outside
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
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="tooltip flex items-center gap-2 px-4 py-2 rounded-sm text-white border border-white/20 backdrop-blur-md ml-2 hover:bg-white/20 transition duration-200"
      data-tip="Download Resume"
      >
        <Download className="w-4 h-4" />
        <ChevronDown className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 z-50 rounded-xl backdrop-blur-2xl bg-black/70 shadow-lg border border-purple-500/30"
          >
            <div className="absolute -bottom-4 -left-4 w-16 h-16 blur-3xl bg-pink-600 rounded-full opacity-50 lg:opacity-30"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 blur-3xl bg-pink-600 rounded-full opacity-50 lg:opacity-30"></div>
       
            <div className="flex flex-col text-white text-sm">
              <button
                onClick={() => handleDownload("english")}
                className="flex items-center justify-between px-4 py-3 hover:bg-purple-600/30 transition rounded-t-xl"
              >
                <span>English</span>
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDownload("chinese")}
                className="flex items-center justify-between px-4 py-3 hover:bg-purple-600/30 transition rounded-b-xl"
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

export default DownloadButton;
