import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, BookKey } from "lucide-react";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="relative py-20 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-20 left-0 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <TitleHeader sub="💼 Experience Timeline" />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        >
          My Learning Journey
        </motion.h1>

        <div className="mt-20 md:mt-32 relative">
          {/* Vertical timeline line - Positioned Left */}
          <motion.div
            className="absolute left-4 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full z-0"
            style={{ height: timelineHeight }}
          />

          <motion.div
            className="relative z-10 space-y-20 md:space-y-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {expCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="relative flex flex-col md:flex-row gap-12 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Card Section */}
                <motion.div
                  className="md:w-5/12 md:pr-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <GlowCard card={card} index={index} />
                </motion.div>

                {/* Description Section */}
                <motion.div className="md:w-7/12 relative md:pl-8 pl-12 space-y-6">
                  {/* Timeline icon */}
                  <div className="absolute left-4 md:left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 shadow-2xl border-white/10 flex items-center justify-center z-10">
                    {index < 2 ? (
                      <GraduationCap className="w-6 h-6 text-white" />
                    ) : (
                      <BookKey className="w-6 h-6 text-white" />
                    )}
                  </div>

                  <motion.h2
                    className="font-bold text-3xl md:text-4xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    {card.title}
                  </motion.h2>

                  <motion.p
                    className="text-pink-100 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <span>🗓️</span>
                    <span>{card.date}</span>
                  </motion.p>

                  <motion.p
                    className="text-purple-300 italic font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
                    Key Contributions
                  </motion.p>

                  <motion.ul
                    className="space-y-4 text-blue-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    {card.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-block mt-2 w-2 h-2 rounded-full bg-pink-400 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
