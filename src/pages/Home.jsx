import { useEffect, useState } from "react";
import { Link } from "react-scroll"; // Assuming you're using react-scroll for smooth scrolling
import CustomAccordion from "../components/Accordin.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import Hero from "./Hero.jsx";
import { ArrowUp } from "lucide-react";
import FeaturedProjects from "./FeaturedProjects.jsx";
import Marquee from "./Marquee.jsx";
import LearningJourney from "./Learning.jsx";

const Home = () => {
  const [isHomeSection, setIsHomeSection] = useState(true);
  const handleScroll = () => {
    const homeSection = document.getElementById("home"); // Ensure you have an ID for your home section
    if (homeSection) {
      const homeSectionTop = homeSection.getBoundingClientRect().top;

      // Check if the home section is in view
      if (homeSectionTop >= 0 && homeSectionTop < window.innerHeight) {
        setIsHomeSection(true);
      } else {
        setIsHomeSection(false);
      }
    }
  };

  useEffect(() => {
    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Conditionally render the button based on the current section */}
      {!isHomeSection && (
        <div className="fixed z-50 bottom-5 right-5">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50} // Adjust if you have a fixed navbar
          >
            <div className="w-10 h-10 flex justify-center items-center bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <ArrowUp className="w-7 h-7 text-white" />
            </div>
          </Link>
        </div>
      )}

      <div id="home">
        <Hero />
      </div>
      <LearningJourney/>
      <FeaturedProjects />
      <Marquee />
      <ExperienceSection />
      <CustomAccordion />
    </div>
  );
};

export default Home;
