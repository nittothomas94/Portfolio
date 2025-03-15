import Navbar from './components/Navbar/navbar';
import VerticalLineLeft from './components/VerticalLineLeft/verticallineleft';
import VerticalLineRight from './components/VerticalLineRight/verticallineright';
import { Typed } from 'react-typed';
import Typewriter from 'typewriter-effect';
import projects from './ProjectData/projectData';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Contact from './components/Contact/contact';
import './App.css';

const App = () => {
  const openResumeInDrive = () => {
    window.open(
      'https://drive.google.com/file/d/1AdWTLYBcbJXrUP-DPdYbmwgZvMGi24DW/view?usp=sharing'
    );
  };

  return (
    <>
      <Navbar />
      <VerticalLineLeft />
      <VerticalLineRight />
      <div className="container">
        <div className="home-section" id="home">
          <h1 className="heading">
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
          <h1 className="heading heading-name">Nitto Thomas</h1>
          <p className="home-caption">
            <span>Fullstack Developer based in India </span>
            Crafting User Centric <span>Experiences</span>, <br /> Crafting
            sleek high-performance websites focusing on clean code and user
            expirence
          </p>

          {/* Contact Me */}
          <div className="connect-me">
            <a
              href="https://github.com/nittothomas94"
              className="connect-me-button"
            >
              <i class="fa-brands fa-github"></i>&nbsp;&nbsp;GitHub
            </a>

            <a href="https://www.linkedin.com/in/nittothomas/">
              <i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp;LinkedIn
            </a>
            <a href="#">
              <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp; Email
            </a>
            <a
              href="/pdf/Nitto_Thomas-Full_Stack_Developer.pdf"
              download="Nitto_Thomas-Full_Stack_Developer.pdf"
            >
              <i class="fa-solid fa-file"></i>&nbsp;&nbsp; Resume
            </a>
          </div>
        </div>

        {/* About */}
        <div className="about-section apearelement" id="about">
          {/* <h1 className="heading">Overview</h1> */}
          {/* Heading */}
          <Heading text="Overview" />
          <div className="overview">
            <div className="desc">
              <p>
                I'm a Passionate Developer Ready to Take On New Challenges
                skilled in building dynamic websites, user-friendly web apps
                with the{' '}
                <span>MERN stack (MongoDB, Express, React, Node.js).</span>
                Driven by a love for clean code and intuitive design, I
                continuously learn and collaborate to create powerful,
                real-world applications.{' '}
                <span> Let's build something amazing together!</span>
              </p>
              <button onClick={openResumeInDrive}>View Resume</button>
            </div>
            <div className="my-image">
              <img src="/images/Nitto-img.jpg" alt="my-profile-image" />
            </div>
            <div className="botton-box">
              <p>Eager to collaborate with teams across different time zones</p>
              <h2>Flexible with Global Communication</h2>
            </div>
            <div className="botton-box">
              <p>Always learning and improving.</p>
              <h2>My Tech Stack</h2>
            </div>
          </div>
        </div>

        {/* Project */}
        <div className="project-section" id="projects">
          <h3 className="heading my-project">MY PROJECTS</h3>
          {projects.map(item => {
            return (
              <div className="card">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <img src={item.image} alt="project image" />
                <div className="source">
                  <a href={item.site}>View Live Site</a>
                  <a href={item.code}>View Source Code</a>
                  <a href={item.youtube}>Watch a video</a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div className="contact-section" id="contact">
          <div className="left-contact">
            <h4>Contact Me</h4>
            <h1 className="heading">Get In Touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur numquam quisquam consequuntur sunt, voluptates quae
              nihil adipisci labore perferendis, fugit magnam quas maiores porro
              at omnis reiciendis suscipit aperiam sint.
            </p>
            <div className="call-email-map-whatsapp">
              {/* Call */}
              <div className="box">
                <a href="tel:+919446979075">
                  <i className="material-icons">call</i>
                  <h3>Call Me</h3>
                  <p>+91 9446979075</p>
                </a>
              </div>

              {/* Email */}
              <div className="box">
                <a href="mailto:nittothomas94@gmail.com?subject=Interested%20to%20connect&body=Hi%20Nitto,%20I%20am%20interested%20to%20connect%20with%20you.">
                  <i className="material-icons">mail</i>
                  <h3>Email Me</h3>
                  <p>nittothomas94@gmail.com</p>
                </a>
              </div>

              {/* Google Maps */}
              <div className="box">
                <a
                  href="https://www.google.com/maps?q=Alappuzha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="material-icons">pin_drop</i>
                  <h3>Location</h3>
                  <p>Alappuzha</p>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="box">
                <a
                  href="https://wa.me/919446979075?text=Hi%20Nitto,%20I%20am%20interested%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <h3>WhatsApp</h3>
                  <p>Chat on WhatsApp</p>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
