import { motion } from 'framer-motion';
import Heading from './Heading';

const About = () => {
  const openResumeInDrive = () => {
    window.open(
      'https://drive.google.com/file/d/your_resume_id_here/view?usp=sharing',
      '_blank'
    );
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Add these two variants above return
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="about"
      className="container-section min-h-[80vh] px-8 md:px-20 py-12 flex flex-col gap-10 lg:gap-[70px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariant}
    >
      {/* Heading */}
      <Heading text="Overview" />

      {/* Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
        {/* Description */}
        <motion.div
          className="w-full h-[455px] sm:h-[450px] md:h-[250px]  text-white flex flex-col justify-between  lg:gap-[50px]"
          variants={fadeInVariant}
        >
          <p className="lg:w-[450px] xl:w-[600px] 2xl:w-[700px] text-[15px] lg:text-[18px] leading-[35px] 2xl:pb-[50px]">
            I'm a Passionate Developer Ready to Take On New Challenges, skilled
            in building dynamic websites, user-friendly web apps with the{' '}
            <span className="text-green-400 font-medium">
              MERN stack (MongoDB, Express, React, Node.js)
            </span>
            . Driven by a love for clean code and intuitive design, I
            continuously learn and collaborate to create powerful, real-world
            applications.{' '}
            <span className="text-green-400 font-medium">
              Let's build something amazing together!
            </span>
          </p>

          <motion.button
            onClick={openResumeInDrive}
            className="sm:w-[300px] lg:w-[400px] 2xl:w-[400px] lg:py-[10px] 2xl:py-[15px] 2xl:h-[80px] self-center 2xl:self-start mx-auto mt-[200px] 2xl:mt-20  h-10 rounded-lg border border-white shadow-[0px_0px_100px_5px_#339757] text-white hover:border-green-500 hover:scale-105 transition-all duration-200 text-sm font-medium"
            variants={fadeInVariant}
          >
            View Resume
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div className="flex justify-center" variants={fadeInVariant}>
          <img
            src="/images/Nitto-img.jpg"
            alt="my-profile"
            className="w-[240px] sm:w-[280px] h-[300px]  sm:h-[350px] object-cover mt-[-10px] rounded-tl-[30%] rounded-br-[30%] shadow-[0px_0px_100px_5px_#2f794a]"
          />
        </motion.div>
      </div>

      {/* Bottom Boxes with staggered animation */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Box */}
        <motion.div
          className="border border-green-900 rounded-lg flex flex-col items-center justify-center gap-[10px] xl:gap-[15px] p-[10px] h-[140px] md:h-[200px] text-white text-sm hover:text-base hover:border-none transition-all duration-200"
          variants={fadeInLeft}
        >
          <p className="text-[15px] md:text-[20px] lg:text-[18px] xl:text-[20px] text-center">
            Eager to collaborate with teams across different time zones
          </p>
          <h2 className="font-semibold mt-2 md:text-[25px] lg:text-[20px] xl:text-[24px] text-green-400">
            Flexible with Global Communication
          </h2>
        </motion.div>

        {/* Right Box */}
        <motion.div
          className="border border-green-900 rounded-lg flex flex-col items-center justify-center gap-[10px] xl:gap-[15px] p-[10px] h-[140px] md:h-[200px] text-white text-sm hover:text-base hover:border-none transition-all duration-200"
          variants={fadeInRight}
        >
          <p className="text-[15px] md:text-[20px] lg:text-[18px] xl:text-[20px] text-center">
            Always learning and improving.
          </p>
          <h2 className="font-semibold mt-2 md:text-[25px] lg:text-[20px] xl:text-[24px] text-green-400">
            My Tech Stack
          </h2>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
