import { Facebook, GithubIcon, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mutasim-fuad-rimu-36a4a8260/",
      label: "LinkedIn",
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      href: "https://github.com/rimu-7",
      label: "Github",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://github.com/rimu.mutasim",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/__rimu_7?igsh=dGl6bWx2bzAwOHUy",
      label: "Instagram",
    },
    {
      icon: <X className="w-5 h-5" />,
      href: "https://x.com/__rimu7_?t=iirXAAAqTFhvAh9HKzTc6g&s=09",
      label: "X",
    },
  ];

  return (
    <footer className="relative w-full py-10 text-white flex flex-col items-center gap-6">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl rounded-full"></div>
      </div>

      {/* Social links */}
      <div className="flex flex-wrap justify-center gap-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            data-tip={social.label}
            className="group tooltip p-3 rounded-full bg-white/5 hover:bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <span className="group-hover:scale-110 transition-transform duration-300">
              {social.icon}
            </span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {currentYear}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#6366f1] via-[#a21caf] to-[#fb7185] font-medium">
          Rimu Bhai
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
