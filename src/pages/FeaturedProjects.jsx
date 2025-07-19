// components/FeaturedProjects.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { GithubIcon, ExternalLink, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import AllProjectsModal from "./AllProjectsModal";
import { toast } from "react-toastify";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
      } catch (error) {
        console.error(error);
        toast.error("Failed to load projects");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showModal]);

  return (
    <section className="py-16">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Featured Projects
      </motion.h1>

      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-96 bg-gray-800/50 rounded-xl animate-pulse"
              />
            ))
          : projects.map((project) => (
              <motion.div
                key={project._id}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl shadow-lg overflow-hidden backdrop-blur-2xl border border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(Array.isArray(project.technologies)
                      ? project.technologies.join(",").split(",")
                      : project.technologies.split(",")
                    ).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-800 opacity-80 text-xs font-medium rounded text-rose-400"
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
                      className="flex items-center text-gray-400 hover:text-white"
                    >
                      <GithubIcon className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    {project.live_demo && (
                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
      </div>

      <div className="text-center mt-14">
        <button
          onClick={() => setShowModal(true)}
          className="tooltip inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-pink-700 to-purple-700 rounded-md hover:scale-105 transition-transform duration-300"
          data-tip="View all projects"
        >
          View All Projects
          <MoveRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {showModal && (
        <AllProjectsModal
          projects={allProjects}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default FeaturedProjects;
