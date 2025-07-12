import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { CircleX, GithubIcon, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://personal-portfolio-backend-weld.vercel.app/api/projects`
        );
        const sortedProjects = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setProjects(sortedProjects.slice(0, 3));
        setAllProjects(sortedProjects);
        setLoading(false);
        console.log(sortedProjects);
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Failed to load projects");
      }
    };
    fetchProjects();
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <section id="projects" className="relative w-full py-10 overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-800/50 rounded-xl h-96 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={item}
                whileHover={hoverEffect}
                className=" rounded-xl shadow-lg overflow-hidden  backdrop-blur-2xl border border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-96 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {/* {project.technologies.split(",").map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-zinc-800  opacity-80  text-xs font-medium rounded"
                        >
                          <p className="text-rose-400">{tech.trim()}</p>
                        </span>
                      ))} */}
                      {(Array.isArray(project.technologies)
                        ? project.technologies.join(",").split(",")
                        : project.technologies.split(",")
                      ).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-zinc-800 opacity-80 text-xs font-medium rounded"
                        >
                          <p className="text-rose-400">{tech.trim()}</p>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    {project.live_demo && (
                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => setShowModal(true)}
            className="relative group justify-between items-center inline-flex px-5 hover:border py-3 rounded-md hover:bg-none bg-gradient-to-r from-pink-700 to-purple-700  font-semibold focus:outline-none  duration-500 transform-border transform-colors"
          >
            View All Projects
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* All Projects Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  backdrop-blur-2xl z-50 overflow-y-auto py-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute fiexed  top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <CircleX className="w-6 h-6 text-red-400" />
            </button>
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className=" rounded-xl shadow-2xl relative"
              >
                {/* Modal Content */}
                <div className="p-6 md:p-8 backdrop-blur-5xl">
                  <h2 className="text-3xl font-bold mb-8 text-center text-white">
                    All Projects
                  </h2>

                  <div className="space-y-12">
                    {loading
                      ? [...Array(2)].map((_, i) => (
                          <div
                            key={i}
                            className="flex flex-col lg:flex-row gap-6 animate-pulse"
                          >
                            <div className="lg:w-1/3 h-48 bg-gray-800 rounded-lg"></div>
                            <div className="lg:w-2/3 space-y-4">
                              <div className="h-6 w-3/4 bg-gray-800 rounded"></div>
                              <div className="h-4 w-full bg-gray-800 rounded"></div>
                              <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
                              <div className="flex gap-2">
                                <div className="h-6 w-20 bg-gray-800 rounded-full"></div>
                                <div className="h-6 w-20 bg-gray-800 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        ))
                      : allProjects.map((project, index) => (
                          <div
                            key={project._id}
                            className="flex flex-col lg:flex-row gap-6 border-b border-purple-800 pb-12 last:border-0 last:pb-0"
                          >
                            {/* Project Image */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5 }}
                              viewport={{ once: true }}
                              className="lg:w-1/3"
                            >
                              <div className="relative rounded-lg overflow-hidden group">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                                  onClick={() =>
                                    setSelectedImage(project.image)
                                  }
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                              </div>
                            </motion.div>

                            {/* Project Details */}
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5 }}
                              viewport={{ once: true }}
                              className="lg:w-2/3"
                            >
                              <h3 className="text-xl font-bold text-white mb-2">
                                {project.title}
                              </h3>
                              <p className="text-gray-300 mb-4">
                                {project.description}
                              </p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {/* {project.technologies
                                  .split(",")
                                  .map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-3 py-2 bg-zinc-800 opacity-90 text-rose-400 text-xs font-medium rounded"
                                    >
                                      {tech.trim()}
                                    </span>
                                  ))} */}
                                {(Array.isArray(project.technologies)
                                  ? project.technologies.join(",").split(",")
                                  : project.technologies.split(",")
                                ).map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-zinc-800 opacity-80 text-xs font-medium rounded"
                                  >
                                    <p className="text-rose-400">
                                      {tech.trim()}
                                    </p>
                                  </span>
                                ))}
                              </div>

                              <div className="flex gap-4">
                                <a
                                  href={project.project_link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                  <GithubIcon className="w-4 h-4 mr-2" />
                                  View Code
                                </a>
                                {project.live_demo && (
                                  <a
                                    href={project.live_demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                  >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Demo
                                  </a>
                                )}
                              </div>
                            </motion.div>
                          </div>
                        ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300"
            >
              <CircleX className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
