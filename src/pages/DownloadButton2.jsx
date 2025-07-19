import { Download } from "lucide-react";
import React, { useState } from "react";

// DownloadButton component for handling file downloads
const DownloadButton2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const files = {
    english: "/Mutasim_fuad_rimu_english.pdf",
    chinese: "/Mutasim_fuad_rimu_chinese.pdf",
  };

  const handleDownload = (language) => {
    const fileUrl = files[language];

    if (!fileUrl) {
      console.error(`File URL not found for language: ${language}`);
      return;
    }

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" tooltip cursor-pointer px-4 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2"
      data-tip="Download Resume"
      >
        <Download className="w-5 h-5" />
        <span>Download Resume</span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-white/5 backdrop-blur-lg ring-1 ring-purple-600 ring-opacity-50 z-10 shadow-lg">
          <button
            onClick={() => handleDownload("english")}
            className="block w-full text-left px-4 py-2 text-sm hover:text-purple-300 hover:bg-white/10 transition duration-150 ease-in-out"
          >
            English <Download className="inline w-4 h-4 ml-2" />
          </button>
          <button
            onClick={() => handleDownload("chinese")}
            className="block w-full text-left px-4 py-2 text-sm hover:text-purple-300 hover:bg-white/10 transition duration-150 ease-in-out"
          >
            中文 <Download className="inline w-4 h-4 ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadButton2;
