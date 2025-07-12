const navLinks = [
	{
		name: "Work",
		link: "#work",
	},
	{
		name: "Experience",
		link: "#experience",
	},
	{
		name: "Skills",
		link: "#skills",
	},
	{
		name: "Projects",
		link: "./projects",
	},

];


const words = [
	{ text: "Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
	{ text: "Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
	{ value: 2, suffix: "+", label: "Years of Experience" },
	{ value: 4, suffix: "+", label: "Satisfied Clients" },
	{ value: 8, suffix: "+", label: "Completed Projects" },
	{ value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
	{
		imgPath: "/images/logos/company-logo-1.png",
	},
	{
		imgPath: "/images/logos/company-logo-2.png",
	},
	{
		imgPath: "/images/logos/company-logo-3.png",
	},
	{
		imgPath: "/images/logos/company-logo-4.png",
	},
	{
		imgPath: "/images/logos/company-logo-5.png",
	},
	{
		imgPath: "/images/logos/company-logo-6.png",
	},
	{
		imgPath: "/images/logos/company-logo-7.png",
	},
	{
		imgPath: "/images/logos/company-logo-8.png",
	},
	{
		imgPath: "/images/logos/company-logo-9.png",
	},
	{
		imgPath: "/images/logos/company-logo-10.png",
	},
	{
		imgPath: "/images/logos/company-logo-11.png",
	},
];

const abilities = [
	{
		imgPath: "/images/seo.png",
		title: "Quality Focus",
		desc: "Delivering high-quality results while maintaining attention to every detail.",
	},
	{
		imgPath: "/images/chat.png",
		title: "Reliable Communication",
		desc: "Keeping you updated at every step to ensure transparency and clarity.",
	},
	{
		imgPath: "/images/time.png",
		title: "On-Time Delivery",
		desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
	},
];

const techStackImgs = [
	{
		name: "React Developer",
		imgPath: "/images/logos/react.png",
	},
	{
		name: "Python Developer",
		imgPath: "/images/logos/python.svg",
	},
	{
		name: "Backend Developer",
		imgPath: "/images/logos/node.png",
	},
	{
		name: "Interactive Developer",
		imgPath: "/images/logos/three.png",
	},
	{
		name: "Project Manager",
		imgPath: "/images/logos/git.svg",
	},
];

const techStackIcons = [
	{
		name: "Node Developer",
		modelPath: "/models/node-transformed.glb",

		scale: 5,
		rotation: [0, -Math.PI / 2, 0],
	},
	{
		name: "React Developer",
		modelPath: "/models/react_logo-transformed.glb",
		scale: 1,
		rotation: [0, 0, 0],
	},
	{
		name: "Backend Developer",
		modelPath: "/models/python-transformed.glb",

		scale: 0.8,
		rotation: [0, 0, 0],
	},
	{
		name: "Interactive Developer",
		modelPath: "/models/three.js-transformed.glb",
		scale: 0.05,
		rotation: [0, 0, 0],
	},
	{
		name: "Project Manager",
		modelPath: "/models/git-svg-transformed.glb",
		scale: 0.05,
		rotation: [0, -Math.PI / 4, 0],
	},
];

const expCards = [
	{
		review: "I earned my Bachelor's degree in Computer Science, focusing on practical coding, system design, and real-world problem-solving.",
		imgPath: "/images/education-bachelor.png",
		logoPath: "/images/university-logo1.png",
		title: "B.Sc. Computer Science & Technology",
		date: "2020 - 2024",
		responsibilities: [
			"Nanjing University of Science and Technology, Binjiang College",
			"Studied algorithms, databases, and software engineering",
			"Developed a Potato Disease Classification system using Deep Learning",
			"Active in sports like badminton and football",
			"GPA: 3.80/5",
		],
	},
	{
		review: "Currently pursuing a Master's in Computer Science, focusing on Machine Learning, system security, and real-time computing.",
		imgPath: "/images/education-masters.png",
		logoPath: "/images/university-logo2.png",
		title: "M.Sc. Computer & Application Technology",
		date: "2024 - Present",
		responsibilities: [
			"Changchun University of Science and Technology",
			"Specialized in Deep Learning and distributed systems",
			"Researching Deep Learning-based Secret Key Extraction in FDD Systems",
			"Studying advanced topics like Concurrent Computation and Software Verification",
		],
	},
	{
		review: "Started as a Frontend Developer building fast, accessible, and visually rich web applications with modern frameworks.",
		imgPath: "/images/exp1.png",
		logoPath: "/images/logo1.png",
		title: "Frontend Developer",
		date: "2022 - Present",
		responsibilities: [
			"Built responsive web apps using React.js and modern CSS",
			"Created smooth animations with Framer Motion and GSAP",
			"Focused on fast load times and high Lighthouse scores",
			"Ensured clean, maintainable code through testing and reviews",
		],
	},
	{
		review: "Moved into full-stack development, combining Node.js, Express, Supabase, MySQL, and PostgreSQL to build complete applications.",
		imgPath: "/images/exp2.png",
		logoPath: "/images/logo2.png",
		title: "Full Stack Developer",
		date: "2022 - Present",
		responsibilities: [
			"Built RESTful APIs with Node.js and Express",
			"Integrated Supabase for authentication and real-time features",
			"Worked with MySQL and PostgreSQL for scalable data management",
			"Applied Machine Learning for data-driven features",
		],
	},
	{
		review: "Developed strong DevOps skills to automate deployments, manage cloud infrastructure, and ensure system reliability and security.",
		imgPath: "/images/exp3.png",
		logoPath: "/images/logo3.png",
		title: "DevOps Engineer",
		date: "2024 - Present",
		responsibilities: [
			"Set up CI/CD pipelines with GitHub Actions for fast deployments",
			"Managed AWS services like EC2, S3, Lambda, and CloudFront",
			"Monitored systems using Prometheus and Grafana",
			"Secured applications with HTTPS, CSP, and security headers",
		],
	},
];







const expLogos = [
	{
		name: "logo1",
		imgPath: "/images/logo1.png",
	},
	{
		name: "logo2",
		imgPath: "/images/logo2.png",
	},
	{
		name: "logo3",
		imgPath: "/images/logo3.png",
	},
];

const testimonials = [
	{
		name: "Esther Howard",
		mentions: "@estherhoward",
		review:
			"I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
		imgPath: "/images/client1.png",
	},
	{
		name: "Wade Warren",
		mentions: "@wadewarren",
		review:
			"Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
		imgPath: "/images/client3.png",
	},
	{
		name: "Guy Hawkins",
		mentions: "@guyhawkins",
		review:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		imgPath: "/images/client2.png",
	},
	{
		name: "Marvin McKinney",
		mentions: "@marvinmckinney",
		review:
			"Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
		imgPath: "/images/client5.png",
	},
	{
		name: "Floyd Miles",
		mentions: "@floydmiles",
		review:
			"Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
		imgPath: "/images/client4.png",
	},
	{
		name: "Albert Flores",
		mentions: "@albertflores",
		review:
			"Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
		imgPath: "/images/client6.png",
	},
];

const socialImgs = [
	{
		name: "insta",
		imgPath: "/images/insta.png",
	},
	{
		name: "fb",
		imgPath: "/images/fb.png",
	},
	{
		name: "x",
		imgPath: "/images/x.png",
	},
	{
		name: "linkedin",
		imgPath: "/images/linkedin.png",
	},
];


const proj = [
  {
    "_id": "67bbf0c5e84062724614f2e2",
    "title": "Task Management App",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1740370116/portfolio/x5wtd3yfktb4i7fzie4p.png",
    "description": "A personal portfolio website showcasing projects, skills, and contact information.",
    "technologies": [
      "HTML, TAILWIND, REACTJS"
    ],
    "githubrepo": "https://github.com/rimu-7/travellist",
    "liveDemo": "",
    "features": [
      ""
    ],
    "__v": 0
  },
  {
    "_id": "67bbf1f5e84062724614f2e4",
    "title": "Potato Disease Classification with Deep Learning",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1740370420/portfolio/ebyb5noi0pz1na8wlrtq.png",
    "description": "A web app that uses deep learning to classify potato plant images as healthy or diseased. Users upload photos, and the system provides quick predictions to assist farmers in disease identification.",
    "technologies": [
      "HTML, CSS, React, Bootstrap, Python, Tensorflow, Numpy, Pandas, tensorflow.keras, matplotlib.pyplot, ImageDataGenerator, backend as K"
    ],
    "githubrepo": "https://github.com/rimu-7/Potato-Disease-Classification-Based-on-Deep-Learning",
    "liveDemo": "",
    "features": [
      ""
    ],
    "__v": 0
  },
  {
    "_id": "67bbf28de84062724614f2e6",
    "title": "HandWritten Recognition with deep Learning",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1740370572/portfolio/lh06lkls6mul1lv6vkah.png",
    "description": "Goal is to construct and train an artificial neural network on thousands of images of handwritten digits so that it may successfully identify others when presented. The data that will be incorporated is the MNIST database which contains 60,000 images for training and 10,000 test images. We will use the Keras Python API with TensorFlow as the backend..\"",
    "technologies": [
      "numpy, matplotlib, scipy, torch, torchvision, opencv-python"
    ],
    "githubrepo": "https://github.com/rimu-7/MNIST_IN_KERAS/blob/main/MNIST_in_Keras.ipynb",
    "liveDemo": "",
    "features": [
      ""
    ],
    "__v": 0
  },
  {
    "_id": "67bbf330e84062724614f2e8",
    "title": "Personal Resume Website",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1748179829/portfolio/project_20250525T133029852Z.png",
    "description": "A personal portfolio website showcasing projects, skills, and contact information.",
    "technologies": [
      "HTML, Tailwind, React.js, JS, Framer-Motion, EmailJs"
    ],
    "githubrepo": "https://github.com/rimu-7/personal-potfolio",
    "liveDemo": "https://rimubhai.netlify.app/",
    "features": [
      ""
    ],
    "__v": 0
  },
  {
    "_id": "67bbf3b2e84062724614f2ea",
    "title": "E-Commerce Platform",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1740370865/portfolio/ddkowgvmtpao21mr7rnt.png",
    "description": "A fully functional e-commerce platform designed to provide an intuitive shopping experience, featuring product listings, user authentication, a shopping cart, and secure payment processing.",
    "technologies": [
      "HTML5, CSS3, JavaScript(ES6+), React.js, Node.js, Express.js, MySQL, RESTful APIs, JWT Authentication, Stripe API for Payments"
    ],
    "githubrepo": "https://github.com/rimu-7/helloecomerseshop",
    "liveDemo": "https://helloshop-self.vercel.app/",
    "features": [
      ""
    ],
    "__v": 0
  },
  {
    "_id": "67bc2022c7479e6307b94dc7",
    "title": "NativeBreed",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1740382241/portfolio/m2dl2kkp1stpqhcwspvw.png",
    "description": "The **NativeBreed** is a music band. It's a dynamic platform for showcasing the band's journey, featuring a carousel, about section, events page (with date-wise updates), blogs for sharing insights, artist profiles, and a contact form. It’s a central hub for fans to stay connected and informed about the band’s music, events, and updates. 🎸",
    "technologies": [
      "HTML, Tailwind, React.js, JS, MongoDB, Express, Framer-Motion, EmailJs"
    ],
    "githubrepo": "https://github.com/rimu-7/sirreno_profile",
    "liveDemo": " https://recordlabels.vercel.app/",
    "features": [
      ""
    ],
    "__v": 0
  },
  {
    "_id": "67bc2084c7479e6307b94dca",
    "title": " J Slught",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1740382340/portfolio/ehk5zy1x9mqw9xc3yveb.png",
    "description": "`The **J Slught Artist** is an artist. It's a dynamic platform showcasing the artist's journey, featuring a carousel, about section, events page (with date-wise updates), blogs for sharing insights, and a contact form. It’s a central hub for fans to stay connected and informed about J Slught’s music, events, and updates. 🎸",
    "technologies": [
      "HTML, Tailwind, React.js, JS, MongoDB, Express, Framer-Motion, EmailJs"
    ],
    "githubrepo": "https://github.com/rimu-7/sirreno_profile2",
    "liveDemo": "https://artist-profile-one.vercel.app/",
    "features": [
      ""
    ],
    "__v": 0
  },
  {
    "_id": "67dbc1ea6e893296e97540ba",
    "title": "Watch-Store",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1742455274/portfolio/project_20250320T072113908Z.png",
    "description": "The watch store is a fully functional and responsive e-commerce platform built with Next.js, MongoDB, Cloudinary, and Tailwind CSS, delivering a seamless user experience and comprehensive administrative tools. Leveraging cutting-edge technologies, this watch store exemplifies the power of modern web development in creating a scalable and visually appealing e-commerce solution.",
    "technologies": [
      "Next.js, MongoDB, Cloudinary, Tailwind CSS"
    ],
    "githubrepo": "https://github.com/rimu-7/watch-store",
    "liveDemo": "",
    "features": [
      ""
    ],
    "__v": 0
  },
  {
    "_id": "67dd73c7e7d7770b1922227f",
    "title": "Personal Profile",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1742566343/portfolio/project_20250321T141223307Z.png",
    "description": "A personal portfolio website built with React, Tailwind CSS, and Framer Motion for a modern, responsive, and interactive UI. It showcases my projects, experiences, and skills, allowing visitors to learn more about my work. The backend is powered by Express.js and MongoDB, with Cloudinary for media storage and Multer for file uploads.",
    "technologies": [
      "React, Tailwind CSS, Framer Motion, HTML, Express.js, MongoDB, Cloudinary, Multer, CORS"
    ],
    "githubrepo": "https://github.com/rimu-7/personal-profile",
    "liveDemo": "https://rimu07.netlify.app/",
    "features": [
      "Dynamic portfolio showcase, smooth animations, fully responsive design, blog & experience section, image uploading & cloud storage, API integration, dark/light mode , contact form with backend support"
    ],
    "__v": 0
  },
  {
    "_id": "68331b7611a3b097605dbc82",
    "title": "3D Portfolio",
    "image": "https://res.cloudinary.com/ddssf6cm6/image/upload/v1748179829/portfolio/project_20250525T133029852Z.png",
    "description": "A developer portfolio with react, framer.motion, three.js, where you will find a clear and polish design and animations",
    "technologies": [
      "React, Three.js, Framer Motion, Tailwind, FastAPI(backend), MongoDB, Cloudinary, "
    ],
    "githubrepo": "https://rimu-07.vercel.app",
    "liveDemo": "https://rimu-07.vercel.app",
    "features": [
      ""
    ],
    "__v": 0
  }
]

export {
	words,
	abilities,
	logoIconsList,
	counterItems,
	expCards,
	expLogos,
	testimonials,
	socialImgs,
	techStackIcons,
	techStackImgs,
	navLinks,
	proj
};



