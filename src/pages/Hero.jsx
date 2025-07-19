import { words } from "../constants";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Count } from "./Count.jsx";
import DownloadButton2 from "./DownloadButton2.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-full py-5 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Main content */}
      <div className="container mx-auto px-6 lg:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left column - Text content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              {/* Animated heading */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Shipping{" "}
                  <span className="relative inline-block h-16 md:h-20 overflow-y-hidden">
                    <div className="slide-inner">
                      {words.map((word, index) => (
                        <motion.span
                          key={word.text}
                          initial={{ y: 40, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: index * 0.2,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                          }}
                          className="absolute left-0 flex items-center gap-3"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="w-10 h-10 md:w-12 md:h-12 p-2 rounded-full bg-gray-800 shadow-md"
                          />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-purple-400">
                            {word.text}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  </span>
                </h1>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                  into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-purple-400">
                    Real Projects
                  </span>
                </h1>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                  that{" "}
                  <TypeAnimation
                    sequence={[
                      "Deliver Results",
                      2000,
                      "Drive Growth",
                      2000,
                      "Solve Problems",
                      2000,
                      "Create Impact",
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                  />
                </h1>
              </div>

              {/* Introduction */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                Hi, I’m Rimu — a results-driven full-stack developer from
                Bangladesh. I craft high-performance, user-centered web
                solutions that help businesses grow and stand out.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex flex-wrap gap-4 mt-8 items-center"
              >
                {/* Know More button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col gap-4 w-full sm:w-auto"
                >
                  <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="px-4 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    Know More About My Learning Journey
                  </Link>
                </motion.div>

                {/* Download Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <DownloadButton2 />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Count stats */}
          <div className="relative z-10">
            <Count />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      ></motion.div>
    </section>
  );
};

export default Hero;
