import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen backdrop-blur-2xl flex items-center justify-center  px-4">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="text-center backdrop-blur-2xl max-w-md">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="text-yellow-500 w-16 h-16" />
        </div>
        <h1 className="text-5xl font-bold  mb-4">404</h1>
        <p className="text-xl  mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
