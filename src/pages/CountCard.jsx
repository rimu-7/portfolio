// CountCard.jsx
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const CountCard = ({ count, label, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative overflow-hidden text-center flex flex-col items-center justify-center  bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex flex-col justify-center items-center">
        <span className={`text-5xl font-bold ${color} mb-2`}>
          <CountUp end={count} duration={3} />+
        </span>
        <p className="text-xl font-medium  dark:text-gray-300">{label}</p>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 blur-3xl bg-pink-600 rounded-full opacity-50 lg:opacity-30"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 blur-3xl bg-pink-600 rounded-full opacity-50 lg:opacity-30"></div>
        <div
          className={`mt-4 w-full h-1 bg-gradient-to-r from-${color}-100 to-${color}-200 dark:from-${color}-900 dark:to-${color}-800 rounded-full`}
        ></div>
      </div>
      <div
        className={`absolute -bottom-4 -right-4 w-24 h-24 bg-${color}-100 dark:bg-${color}-900 rounded-full opacity-20`}
      ></div>
    </motion.div>
  );
};

export default CountCard;
