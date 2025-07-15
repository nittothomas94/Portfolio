import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.7, // delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="container-section min-h-[85vh] flex flex-col gap-[10px] sm:gap-10 md:gap-[10px] xl:gap-[25px] pt-[100px]"
    >
      {/* Typewriter Intro */}
      <h1 className="text-[35px] md:text-[60px] xl:text-[65px] 2xl:text-[75px] font-bold text-green-400">
        <Typewriter
          options={{
            strings: ["Hi I'm ,"],
            autoStart: true,
            loop: true,
            delay: 120,
            deleteSpeed: 100000,
          }}
        />
      </h1>

      {/* Animated Name using Framer Motion */}
      <motion.h1
        className="text-[65px] sm:text-[70px] md:text-[110px] xl:text-[120px] font-bold text-white leading-18 sm:leading-20 md:leading-[120px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Nitto Thomas
      </motion.h1>

      {/* Caption */}
      <p className="text-[15px] md:text-[19px] lg:text-[21px] xl:text-[30px] leading-relaxed text-white pt-[20px]">
        <span className="text-green-400">
          Fullstack Developer based in India
        </span>
        Crafting User Centric
        <span className="text-green-400"> Experiences</span>,{' '}
        <br className="hidden xl:block" /> Crafting sleek high-performance
        websites focusing <br className="hidden xl:block" /> on clean code and
        user experience
      </p>

      {/* Contact Me Buttons */}
      <motion.div
        className="flex flex-col gap-[15px] md:grid grid-cols-2 md:gap-[30px] xl:flex xl:flex-row pt-[26px] md:pt-[40px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          variants={itemVariants}
          href="https://github.com/nittothomas94"
          className="w-full sm:w-[100px] md:w-[300px] xl:w-[150px] px-4 py-2  xl:px-[30px] xl:py-[9px] border border-white rounded-xl cursor-pointer no-underline hover:scale-110 transition duration-400 hover:border-green-400 text-white flex items-center gap-2"
        >
          <i className="fa-brands fa-github text-green-400" />
          GitHub
        </motion.a>

        <motion.a
          variants={itemVariants}
          href="https://www.linkedin.com/in/nittothomas/"
          className="w-full sm:w-[100px] md:w-[300px] xl:w-[150px] px-4 py-2  xl:px-[30px] xl:py-[9px] border border-white rounded-xl cursor-pointer no-underline hover:scale-110 transition duration-400 hover:border-green-400 text-white flex items-center gap-2"
        >
          <i className="fa-brands fa-linkedin text-green-400" />
          LinkedIn
        </motion.a>

        <motion.a
          variants={itemVariants}
          href="mailto:nitto.thomas.c@gmail.com?subject=Hello Nitto&body=Hello Nitto"
          className="w-full sm:w-[100px] md:w-[300px] xl:w-[150px] px-4 py-2  xl:px-[30px] xl:py-[9px] border border-white rounded-xl cursor-pointer no-underline hover:scale-110 transition duration-400 hover:border-green-400 text-white flex items-center gap-2"
        >
          <i className="fa-solid fa-envelope text-green-400" />
          Email
        </motion.a>

        <motion.a
          variants={itemVariants}
          href="/pdf/NittoThomas.pdf"
          download="Nitto_Thomas-Full_Stack_Developer.pdf"
          className="w-full sm:w-[100px] md:w-[300px] xl:w-[150px] px-4 py-2  xl:px-[30px] xl:py-[9px] border border-white rounded-xl cursor-pointer no-underline hover:scale-110 transition duration-400 hover:border-green-400 text-white flex items-center gap-2"
        >
          <i className="fa-solid fa-file text-green-400" />
          Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
