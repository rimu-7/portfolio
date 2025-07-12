import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowDown, MoveDown } from "lucide-react";

const BentoGrid = ({ projects, setShowModal }) => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Limit logic: show 5 on desktop, 3 on mobile
    const displayedProjects = showAll
        ? projects
        : isMobile
            ? projects.slice(0, 3)
            : projects.slice(0, 5);

    // Calculate grid columns based on screen size and showAll state
    const gridCols = showAll
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

    return (
        <div className="relative w-full h-full ">
            <div className={`grid ${gridCols} gap-6 max-w-7xl mx-auto`}>
                {displayedProjects.map((project, index) => (
                    <BentoCard
                        key={project._id}
                        project={project}
                        index={index}
                        isFeatured={index === 0 && !showAll && !isMobile}
                    />
                ))}

                {!showAll && (
                    <SeeMoreButton onClick={() => setShowModal(true)} />
                )}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>
        </div>
    );
};

const BentoCard = ({ project, index, isFeatured }) => {
    // Determine card size based on featured status
    const cardSize = isFeatured
        ? "md:col-span-2 lg:row-span-2"
        : "";

    // Different animations based on position
    const cardAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
            whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.97 }}
            className={`${cardSize} relative group backdrop-blur-sm bg-white/5 dark:bg-gray-900/5 border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all duration-300`}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

            <div className="relative group rounded-2xl overflow-hidden cursor-pointer h-full w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center w-full h-full transition-all duration-500 group-hover:blur-sm"
                    style={{ backgroundImage: `url(${project.image})` }}
                ></div>

                {/* Text Content */}
                <div className="relative z-10 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 h-full w-full flex flex-col justify-end bg-black/30">
                    <div className="flex items-center gap-3 mb-4">
                        {project.icon && (
                            <div className="p-2 bg-pink-500/10 rounded-lg">
                                {project.icon}
                            </div>
                        )}
                        <h2 className="text-xl md:text-2xl font-bold text-white">{project.title}</h2>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base mb-4">
                        {project.description?.slice(0, isFeatured ? 200 : 100)}
                        {project.description?.length > (isFeatured ? 200 : 100) ? "..." : ""}
                    </p>
                </div>
            </div>


            <div className="mt-6 flex justify-between items-center">
                {project.tags && (
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-xs bg-pink-500/20 text-pink-200 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}


            </div>
        </motion.div>
    );
};

const SeeMoreButton = ({ onClick }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.03,
                y: -5,
                backgroundColor: "rgba(236, 72, 153, 0.1)"
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 }
            }}
            onClick={onClick}
            className="cursor-pointer backdrop-blur-sm bg-white/5 dark:bg-gray-900/5 border border-white/10 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
        >
            <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-pink-400 group-hover:text-pink-300 transition-colors">
                    Explore More Projects
                </span>
                <MoveDown
                    className="h-6 w-6 text-pink-400 group-hover:text-pink-300 mt-2 animate-bounce transition-colors"
                />
            </div>
        </motion.div>
    );
};

export default BentoGrid