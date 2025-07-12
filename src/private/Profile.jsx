import React, { useEffect, useState } from "react";
import API from "./Api.js";
import { toast } from "react-toastify";
import { Trash2, Pencil, GithubIcon } from "lucide-react";
import { motion } from "framer-motion";
import CountManager from "./CountManager.jsx";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    project_link: "",
    live_demo: "",
    features: "",
    image: "",
  });
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get("/users/current", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        toast.error("Failed to load user profile");
      }
    };
    fetchUser();
  }, [token]);

  useEffect(() => {
    if (user) {
      fetchProjects();
    }
  }, [user]);

  const fetchProjects = async () => {
    try {
      const response = await API.get("/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const sortedProjects = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setProjects(sortedProjects);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load projects");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const projectData = { ...formData };

      if (editingProjectId) {
        await API.put(`/projects/${editingProjectId}`, projectData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Project updated successfully");
      } else {
        await API.post("/projects", projectData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Project created successfully");
      }

      setFormData({
        title: "",
        description: "",
        technologies: "",
        project_link: "",
        live_demo: "",
        features: "",
        image: "",
      });
      setEditingProjectId(null);
      await fetchProjects();
    } catch (error) {
      toast.error(
        `Failed to ${editingProjectId ? "update" : "create"} project`
      );
    }
  };

  const handleDelete = async (_id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await API.delete(`/projects/${_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200 || response.status === 204) {
          toast.success("Project deleted successfully");
          fetchProjects();
        } else {
          toast.error(`Failed to delete project: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Delete error:", error);
        toast.error("Failed to delete project");
      }
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      project_link: project.project_link,
      live_demo: project.live_demo,
      image: project.image,
    });
    setEditingProjectId(project._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Profile</h2>
      {user ? (
        <div className="space-y-2 mb-8 max-w-2xl mx-auto text-center">
          <p className="text-lg">
            <strong>Hello, </strong> {user.name}, welcome to your profile,
            <br />
            create your task here, and don't forget to complete your tasks.
          </p>
        </div>
      ) : (
        <p className="text-center">Loading profile...</p>
      )}

      <div className="">
        <CountManager/>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {editingProjectId ? "Edit Project" : "Add New Project"}
        </h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 items-center"
        >
          <label className="flex">
            Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />

          <label className="flex">
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded border focus:outline-none focus:border-blue-500 min-h-[100px]"
          />

          <label className="flex">
            Technologies <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="technologies"
            placeholder="Separate with commas (e.g., React, Node.js, MongoDB)"
            value={formData.technologies}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />

          <label className="flex">
            Project Link <span className="text-red-600">*</span>
          </label>
          <input
            type="url"
            name="project_link"
            placeholder="Project Link"
            value={formData.project_link}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />

          <label>Live Demo</label>
          <input
            type="url"
            name="live_demo"
            placeholder="Live Demo"
            value={formData.live_demo}
            onChange={handleChange}
            className="px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />

          <label className="flex">
            Image URL <span className="text-red-600">*</span>
          </label>
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {editingProjectId ? "Update Project" : "Add Project"}
          </button>

          {editingProjectId && (
            <button
              type="button"
              onClick={() => {
                setFormData({
                  title: "",
                  description: "",
                  technologies: "",
                  project_link: "",
                  live_demo: "",
                  features: "",
                  image: "",
                });
                setEditingProjectId(null);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="space-y-8">
            {projects.map((project) => {
              return (
                <div
                  key={project._id}
                  className="flex flex-col lg:flex-row gap-6 p-6 border rounded-xl shadow-sm "
                >
                  <div className="lg:w-2/3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg "
                    />
                  </div>

                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="lg:w-2/3"
                  >
                    <h6 className="mb-3 font-semibold text-xl">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.project_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline flex items-center gap-1"
                          title={project.title.length > 30 ? project.title : ""}
                        >
                          {project.title.length > 30
                            ? project.title.slice(0, 25) + "..."
                            : project.title}
                          <GithubIcon />
                        </a>

                        <span className="">|</span>

                        <a
                          href={project.live_demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:underline cursor-pointer"
                        >
                          Live Demo 🚀
                        </a>
                      </div>
                    </h6>

                    <p className="mb-4 text-start">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(",").map((tech, index) => (
                        <span
                          className="rounded bg-gray-700 px-3 py-1 text-sm font-medium text-rose-400"
                          key={index}
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => handleEdit(project)}
                        className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      >
                        <Pencil size={18} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition"
                      >
                        <Trash2 size={18} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
