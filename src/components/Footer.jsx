import { Facebook, GithubIcon, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className=" text-white flex flex-col gap-4 text-center">
      <div className="flex justify-center gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/rimubhai/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 tooltip hover:text-purple-500 rounded-full hover:bg-white/10 transition-colors duration-300"
          data-tip="Linkedin"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/rimubhai"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 tooltip hover:text-purple-500 rounded-full hover:bg-white/10 transition-colors duration-300"
          data-tip="Github"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/rimubhai/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 tooltip hover:text-purple-500 rounded-full hover:bg-white/10 transition-colors duration-300"
          data-tip="Facebook"
        >
          <Facebook />
        </a>
        <a
          href="https://github.com/rimubhai"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 tooltip hover:text-purple-500 rounded-full hover:bg-white/10 transition-colors duration-300"
          data-tip="Instagram"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/in/rimubhai/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 tooltip hover:text-purple-500 rounded-full hover:bg-white/10 transition-colors duration-300"
          data-tip="X"
        >
          <X />
        </a>
      </div>
      <p>&#169; {currentYear} Rimu Bhai, All rights reserved.</p> <br />
    </footer>
  );
};

export default Footer;
