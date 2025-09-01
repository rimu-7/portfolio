import { LucideHome, LucidePackage, LucideMessageCircleCode, GraduationCap } from "lucide-react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import ContactForm from "../pages/ContactForm";
import DownloadButton from "./DownloadButton";
import { BiBoltCircle } from "react-icons/bi";

const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [showContact, setShowContact] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			// Show if scrolling up, hide if scrolling down
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	// Prevent background scrolling when contact form is open
	useEffect(() => {
		if (showContact) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [showContact]);

	return (
		<>
			<div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
				<ul className="menu menu-horizontal bg-base-200/80 backdrop-blur-md rounded-box my-8 shadow-lg">
					<li>
						<Link
							to="home"
							smooth={true}
							duration={500}
							offset={-50} // Adjust if you have a fixed navbar
							className="tooltip" data-tip="Home">
							<LucideHome className="w-5 h-5" />
						</Link>
					</li>
					<li>
						<Link
							to="learning"
							smooth={true}
							duration={500}
							offset={-50} // Adjust if you have a fixed navbar
							className="tooltip" data-tip="Technologies">
							<BiBoltCircle className="w-5 h-5" />
						</Link>
					</li>
					<li>
						<Link
							to="projects"
							smooth={true}
							duration={500}
							offset={-50} // Adjust if you have a fixed navbar
							className="tooltip" data-tip="Projects">
							<LucidePackage className="w-5 h-5" />
						</Link>
					</li>
					<li>
						<Link
							to="experience"
							smooth={true}
							duration={500}
							offset={-50} // Adjust if you have a fixed navbar
							className="tooltip" data-tip="Projects">
							<GraduationCap className="w-5 h-5" />
						</Link>
					</li>
					<li>
						<button
							onClick={() => setShowContact(true)}
							className="tooltip" data-tip="Contact Me"
						>
							<LucideMessageCircleCode className="w-5 h-5" />
						</button>
					</li>
					
						<DownloadButton/>
					
				</ul>
			</div>

			{/* Contact Form Modal */}
			{showContact && (
				<ContactForm onClose={() => setShowContact(false)} />
			)}
		</>
	);
};

export default Navbar;