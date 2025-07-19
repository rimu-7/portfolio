import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { CircleX } from "lucide-react";

const ContactForm = ({ onClose }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    // Basic email validation
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://personal-node-mailer.vercel.app/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => onClose(), 1000); // Close after 1 second
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.message || "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-3xl "
      onClick={(e) => {
        // Close when clicking outside the form
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative p-6 rounded-xl w-full max-w-2xl mx-4  border border-gray-700"
      >
        <button
          onClick={onClose}
          className="tooltip absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Close contact form"
          data-tip="Close"
        >
          <CircleX size={24} className="text-red-400" />
        </button>

        {/* Rest of your form remains the same */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5"
          noValidate
        >
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-gray-300 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="outline-none border-2 border-gray-400 rounded-lg p-2 h-10 w-full bg-transparent focus:border-purple-500 transition-colors"
              disabled={loading}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-300 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="outline-none border-2 border-gray-400 rounded-lg p-2 h-10 w-full bg-transparent focus:border-purple-500 transition-colors"
              disabled={loading}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-gray-300 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              rows="5"
              required
              className="outline-none border-2 border-gray-400  rounded-lg p-2 w-full resize-none bg-transparent focus:border-purple-500 transition-colors"
              disabled={loading}
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="self-end w-full text-center rounded-lg px-4 py-2 font-medium cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <span className="flex gap-2 justify-center items-center  text-center">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
