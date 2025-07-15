import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="container-section min-h-[600px] flex flex-col lg:flex-row gap-6 p-6 lg:p-10"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Side */}
      <motion.div
        className="w-full lg:w-[55%] flex flex-col gap-3 pt-6"
        variants={fadeInVariant}
      >
        <h4 className="text-[25px] sm:text-[20px] md:text-[40px] lg:text-[50px] text-green-300 font-semibold">
          Contact Me
        </h4>
        <h1 className="text-[38px] sm:text-[40px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-bold text-green-400">
          Get In Touch
        </h1>
        <p className="text-white leading-relaxed text-[18px]">
          Have a project in mind or just want to say hello? Feel free to reach
          out to me! I'm always open to discussing new opportunities,
          collaborations, or any questions you may have. Let's connect and
          create something amazing together.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {[
            {
              icon: 'call',
              title: 'Call Me',
              value: '+91 9446979075',
              href: 'tel:+919446979075',
            },
            {
              icon: 'mail',
              title: 'Email Me',
              value: 'nittothomas94@gmail.com',
              href: 'mailto:nittothomas94@gmail.com?subject=Interested%20to%20connect&body=Hi%20Nitto,%20I%20am%20interested%20to%20connect%20with%20you.',
            },
            {
              icon: 'pin_drop',
              title: 'Location',
              value: 'Alappuzha',
              href: 'https://www.google.com/maps?q=Alappuzha',
            },
            {
              icon: 'fa-brands fa-whatsapp',
              title: 'WhatsApp',
              value: 'Chat on WhatsApp',
              href: 'https://wa.me/919446979075?text=Hi%20Nitto,%20I%20am%20interested%20to%20connect%20with%20you.',
              isFontAwesome: true,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInVariant}
              className="relative border border-gray-400 cursor-pointer transition-all hover:shadow-[0_10px_30px_4px_rgba(0,255,0,0.3)] active:scale-95"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-fit text-white flex gap-5 xl:gap-[20px] p-[10px]"
              >
                {item.isFontAwesome ? (
                  <i
                    className={`${item.icon} text-green-400 xl:!text-[35px] pt-[10px]`}
                  ></i>
                ) : (
                  <i className="material-icons text-green-400 xl:!text-[35px] pt-[10px]">
                    {item.icon}
                  </i>
                )}
                <div>
                  <h3 className="text-lg xl:text-[22px] font-bold ml-8">
                    {item.title}
                  </h3>
                  <p className="ml-8 text-sm xl:text-[15px] mt-1">
                    {item.value}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full lg:w-[45%] px-4 lg:px-10 pt-6"
        variants={fadeInVariant}
      >
        <ContactForm />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
