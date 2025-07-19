// components/AllProjectsModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { CircleX, GithubIcon, ExternalLink } from "lucide-react";

const AllProjectsModal = ({ projects, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-xl z-50 overflow-y-auto py-10 px-4"
      >
        <div className="sticky top-4 mr-6 z-50 flex justify-end mb-6">
          <button
            onClick={onClose}
            className="tooltip bg-gray-800 rounded-full hover:bg-gray-700 shadow-lg transition-shadow duration-300"
            data-tip="Close"
          >
            <CircleX className="w-6 h-6 text-red-400" />
          </button>
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
          >
            All Projects
          </motion.h1>

          <div className="space-y-12">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-6 border-b border-purple-800 pb-10"
              >
                <div className="lg:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(Array.isArray(project.technologies)
                      ? project.technologies.join(",").split(",")
                      : project.technologies.split(",")
                    ).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-800 text-rose-400 text-xs font-medium rounded"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-white"
                    >
                      <GithubIcon className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                    {project.live_demo && (
                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AllProjectsModal;
