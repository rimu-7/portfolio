import { motion } from "framer-motion";
import { useRef } from "react";

const GlowCard = ({ card }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-8 backdrop-blur-md shadow-2xl group"
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Glow Effect */}
            <div
                className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(99, 102, 241, 0.15), transparent 40%)'
                }}
            />
            <div className="relative z-10">
                <p className="text-blue-100/80 text-lg leading-relaxed">
                    {card.review}
                </p>
            </div>
        </motion.div>
    );
};

export default GlowCard;
