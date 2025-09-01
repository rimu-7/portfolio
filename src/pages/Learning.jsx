import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiGithub,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { DiCss3, DiJavascript } from "react-icons/di";
import { MdHtml, MdJavascript } from "react-icons/md";

const LearningJourney = () => {
  return (
    <section
      id="learning"
      className="relative w-full max-w-7xl mx-auto pt-10 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Expanding My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            While my expertise lies in Node.js, Express, React, and Next.js, I'm
            continuously expanding my skillset to deliver even more robust
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
          {/* Current Expertise - This part remains the same */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              My Core Expertise
            </h3>

            <div className="grid grid-cols-2  gap-4">
              {[
                {
                  icon: <MdHtml className="w-8 h-8 text-orange-400" />,
                  name: "HTML",
                  color: "orange-400",
                },
                {
                  icon: <DiCss3 className="w-8 h-8 text-blue-400" />,
                  name: "CSS",
                  color: "blue-400",
                },
                {
                  icon: <SiJavascript className="w-8 h-8 text-yellow-400" />,
                  name: "JavaScript",
                  color: "yellow-400",
                },
                {
                  icon: <SiNodedotjs className="w-8 h-8 text-green-500" />,
                  name: "Node.js",
                  color: "green-500",
                },
                {
                  icon: <SiReact className="w-8 h-8 text-cyan-400" />,
                  name: "React",
                  color: "cyan-400",
                },
                {
                  icon: <SiExpress className="w-8 h-8 text-gray-100" />,
                  name: "Express.js",
                  color: "gray-300",
                },
                {
                  icon: <SiNextdotjs className="w-8 h-8 text-white" />,
                  name: "Next.js",
                  color: "white",
                },
                {
                  icon: <SiTailwindcss className="w-8 h-8 text-sky-400" />,
                  name: "TailwindCss",
                  color: "sky-400",
                },
                {
                  icon: <SiMysql className="w-8 h-8 text-blue-500" />,
                  name: "MySQL",
                  color: "blue-500",
                },
                {
                  icon: <SiMongodb className="w-8 h-8 text-green-500" />,
                  name: "MongoDB",
                  color: "green-500",
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`
                    flex items-center gap-4 p-3 border-t-2 border-t-gray-700
                    bg-gray-800/50 border-2 border-gray-800/50 
                    rounded-xl transition-all duration-300
                    hover:bg-gray-700/50 
                    hover:border-${tech.color} 
                    hover:shadow-lg hover:shadow-${tech.color}/40
                `}
                >
                  {tech.icon}
                  <span className="text-white font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Journey - REDESIGNED COMPACT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              Currently Mastering
            </h3>

            <div className="space-y-4">
              {/* Golang Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-700 group hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-900/40 rounded-lg group-hover:bg-blue-800/40 transition-colors duration-300 flex-shrink-0">
                    <FaGolang className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-base mb-1">
                      Golang
                    </h4>
                    <p className="text-gray-300 text-xs mb-2 leading-tight">
                      Building high-performance backend systems with Go's
                      efficient concurrency model.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Goroutines", "Concurrency", "Performance"].map(
                        (tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Next.js + TypeScript Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-700 group hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-900/40 rounded-lg group-hover:bg-purple-800/40 transition-colors duration-300 flex-shrink-0">
                    <div className="flex">
                      <SiNextdotjs className="w-4 h-4 text-white" />
                      <SiTypescript className="w-4 h-4 text-blue-400 ml-0.5" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-base mb-1">
                      Next.js + TS
                    </h4>
                    <p className="text-gray-300 text-xs mb-2 leading-tight">
                      Developing type-safe, scalable applications with Next.js
                      14+ and TypeScript.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["App Router", "Type Safety", "Full-Stack"].map(
                        (tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional skill - Optional third card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-700 group hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-900/40 rounded-lg group-hover:bg-cyan-800/40 transition-colors duration-300 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-base mb-1">
                      DevOps
                    </h4>
                    <p className="text-gray-300 text-xs mb-2 leading-tight">
                      Exploring CI/CD pipelines, Docker, and cloud deployment
                      strategies.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Docker", "CI/CD", "AWS"].map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-cyan-900/30 text-cyan-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
