import { useState, useEffect } from 'react';
import { FaGithub, FaYoutube, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  const projectData = [
    {
      id: 5,
      title: 'E-Commerce',
      image: '/images/e-commerce.png',
      desc: 'Fully Responsive Site, Next.js, javaScript, Tailwind css Design From Figma',
      site: 'https://e-commerce-byg4.vercel.app/',
      code: 'https://github.com/nittothomas94/E-Commerce',
      youtube: '',
    },

    {
      id: 5,
      title: 'Coffee Shop',
      image: '/images/coffee.png',
      desc: 'Fully Responsive Site, Next.js, javaScript, Tailwind css Design From Figma',
      site: 'https://coffee-two-inky.vercel.app/',
      code: 'https://github.com/nittothomas94/E-Commerce',
      youtube: '',
    },

    {
      id: 4,
      title: 'Fully Responsive Sustainable Mindz Clone',
      image: '/images/Sustainable-Mindz.png',
      desc: 'landing page built with Next.js, Tailwind CSS, and modern development practices,Figma layout',
      site: 'https://sustainable-mindz.vercel.app/',
      code: 'https://github.com/nittothomas94/Sustainable-Mindz',
      youtube: '',
    },

    {
      id: 3,
      title: 'Nexcent',
      image: '/images/Nexcent.png',
      desc: 'Developed A Clone of Nexcent A Well Structured Code Project',
      site: 'https://nexcent-2-three.vercel.app/',
      code: 'https://github.com/nittothomas94/Nexcent-2',
      youtube: '',
    },
    {
      id: 2,
      title: 'Todo2',
      image: '/images/todo.png',
      desc: 'Developed using MERN',
      site: 'https://to-do-list-application-six-beige.vercel.app/',
      code: 'https://github.com/nittothomas94/To-Do-List-Application',
      youtube: '',
    },

    {
      id: 1,
      title: 'Task Management',
      image: '/images/task-management.png',
      desc: 'Responsive task management using MERN',
      site: 'https://task-management-app-mern.vercel.app/',
      code: 'https://github.com/nittothomas94/Task-Management-App---MERN',
      youtube: '',
    },

    {
      id: 100,
      title: 'Wood Palace',
      image: '/images/wood-palace.png',
      desc: 'Frontend usning React and backend using express, node js',
      site: '',
      code: 'https://github.com/nittothomas94/Wood-Palace',
      youtube: '',
    },
    {
      id: 101,
      title: 'mini ecom',
      image: '/images/e-com.png',
      desc: 'Developed a mini e-commerce website using the MERN stack with a dummy payment gateway, enabling seamless cart management and order processing.',
      site: 'https://mini-ecom-kappa.vercel.app/',
      code: 'https://github.com/nittothomas94/mini-ecom',
      youtube: 'https://youtu.be/o4ppw8sAlrY',
    },

    {
      id: 102,
      title: 'Turf Booking',
      image: '/images/turf-booking.png',
      desc: 'A football turf booking platform allowing users to book available time slots seamlessly',
      site: 'https://turf-booking-eta.vercel.app/',
      code: 'https://github.com/nittothomas94/Turf-Booking',
      youtube: '',
    },
    {
      id: 103,
      title: 'User Management',
      image: '/images/user-management.png',
      desc: 'A CRUD application enabling user creation, updating, deletion, and retrieval',
      site: 'https://user-management-xi-lyart.vercel.app/',
      git: 'https://github.com/nittothomas94/User-Management',
      youtube: 'https://youtu.be/AFscACoutoc',
    },
    {
      id: 104,
      title: 'Todo-MERN',
      image: '/images/todo-mern.png',
      desc: 'A simple and responsive Todo Application with functionalities to add, update, delete, and view tasks. Built using React, Express, Node.js, and MongoDB',
      site: 'https://todo-mern-snowy.vercel.app/',
      git: 'https://github.com/nittothomas94/Todo-MERN',
      youtube: 'https://youtu.be/DopuSxisTXk',
    },
    {
      id: 105,
      title: 'Food Court',
      image: '/images/food-recipe.png',
      desc: 'A React-based recipe browsing app displaying food items, ingredients, and cooking instructions. Integrated with TheMealDB API for fetching and displaying various dishes',
      site: 'https://food-court-recipe.vercel.app/',
      git: 'https://github.com/nittothomas94/Food-Court-Recipe',
      youtube: 'https://youtu.be/eCmSdajbyOs',
    },
    {
      id: 106,
      title: 'Task Manager',
      image: '/images/task-manager.png',
      desc: 'A React-based task, Can create tasks, move them between "Ongoing" and "Completed" columns seamlessly',
      site: 'https://task-manager-sigma-beryl.vercel.app/',
      git: 'https://github.com/nittothomas94/Task-Manager-App---React',
      youtube: '',
    },
    {
      id: 107,
      title: 'Tic Tac Toi Game',
      image: '/images/tic-tac-toi.png',
      desc: 'A simple and interactive Tic-Tac-Toe game built with React, featuring dynamic gameplay, win detection, and reset functionality',
      site: 'https://tic-tac-toe-delta-topaz.vercel.app/',
      git: 'https://github.com/nittothomas94/Tic-Tac-Toe---React-',
      youtube: '',
    },
    {
      id: 108,
      title: 'e-kart',
      image: '/images/mykart-apicall.png',
      desc: 'A React-based e-commerce application that fetches and displays products from the FakeStore API, with features like product listing, details view, and dynamic rendering.',
      site: 'https://e-kart-fake-strore.vercel.app/',
      git: 'https://github.com/nittothomas94/eKart-FakeStrore-api-',
      youtube: '',
    },
    {
      id: 109,
      title: 'Todo - React',
      image: '/images/todo-react.png',
      desc: 'A simple React-based task manager allowing users to add, update, delete, and view tasks with a clean and responsive UI.',
      site: 'https://todo-react-app-six-smoky.vercel.app/',
      git: 'https://github.com/nittothomas94/Todo-React-App',
      youtube: 'https://youtu.be/ydhlnV6BWi0',
    },
    {
      id: 110,
      title: 'NetFlix Clone HTML',
      image: '/images/netflix-clone-html.png',
      desc: 'A static Netflix homepage clone built with HTML and CSS, featuring responsive design and smooth animations for a realistic user interface.',
      site: 'https://nittothomas94.github.io/Netflix-Clone-HTML/',
      git: 'https://github.com/nittothomas94/Netflix-Clone-HTML',
      youtube: 'https://youtu.be/7jvtVAyIJkE',
    },
    {
      id: 111,
      title: 'React Clone HTML',
      image: '/images/react-clone-html.png',
      desc: 'A static clone of the React homepage built using HTML and CSS, showcasing responsive design and smooth animations for an authentic UI  feel',
      site: 'https://nittothomas94.github.io/React-Website-Clone/',
      git: 'https://github.com/nittothomas94/React-Website-Clone-HTML',
      youtube: 'https://youtu.be/EOnrk6wWhKo',
    },
    {
      id: 112,
      title: 'Audi Website Clone HTML',
      image: '/images/audi-clone-html.png',
      desc: 'A static clone of the Audi site homepage built using HTML and CSS, showcasing responsive design and smooth animations for an authentic UI ',
      site: '',
      git: 'https://github.com/nittothomas94/AudiClone',
      youtube: 'https://youtu.be/jOZ2tr1ievw',
    },
  ];

  // ✅ Update items per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(window.innerWidth >= 1024 ? 9 : 6);
    };
    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Pagination logic
  const totalPages = Math.ceil(projectData.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projectData.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <section
      id="projects"
      className="container-section min-h-[600px] py-[25px] xl:py-[100px]"
    >
      <h3 className="text-[38px] sm:text-[40px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-bold text-green-500 text-center">
        <span>MY PROJECTS</span>
      </h3>

      {/* Project Grid with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-[35px]"
        >
          {currentProjects.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-green-800 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 p-[8px] md:p-6 rounded-lg text-white"
            >
              <h2 className="text-[27px] font-semibold mb-2">{item.title}</h2>
              <p className="text-[12px] mb-4">{item.desc}</p>

              <img
                src={item.image}
                alt="project"
                className="w-full h-[200px] object-contain rounded-md mb-4"
              />

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                {item.site && (
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-700 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200 flex items-center gap-2"
                  >
                    <FaGlobe className="text-blue-400 text-[25px]" />
                    <span className="hidden lg:inline">View Live Site</span>
                  </a>
                )}
                {(item.code || item.git) && (
                  <a
                    href={item.code || item.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-700 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200 flex items-center gap-2"
                  >
                    <FaGithub className="text-white text-[25px]" />
                    <span className="hidden lg:inline">View Source Code</span>
                  </a>
                )}
                {item.youtube && (
                  <a
                    href={item.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-700 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200 flex items-center gap-2"
                  >
                    <FaYoutube className="text-red-500 text-[25px]" />
                    <span className="hidden lg:inline">Watch a Video</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center !mt-[50px] xl:!mt-[70px] gap-2 xl:gap-3 flex-wrap">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`w-9 h-9 xl:w-10 xl:h-10 rounded-full text-sm font-bold border border-green-500 ${
            currentPage === 1
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-green-400 hover:text-white'
          } transition-all duration-200 text-green-400`}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-9 h-9 xl:w-10 xl:h-10 rounded-full text-sm font-medium border border-green-500 ${
              currentPage === index + 1
                ? 'bg-green-500 text-white'
                : 'bg-transparent text-green-400'
            } hover:bg-green-400 hover:text-white transition-all duration-200`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`w-9 h-9 xl:w-10 xl:h-10 rounded-full text-sm font-bold border border-green-500 ${
            currentPage === totalPages
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-green-400 hover:text-white'
          } transition-all duration-200 text-green-400`}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Project;
