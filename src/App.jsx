import Navbar from './components/Navbar';
import VerticalLineLeft from './components/VerticallineLeft';
import VerticalLineRight from './components/VerticallineRight';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <VerticalLineLeft />
      <VerticalLineRight />
      <div className="w-full min-h-screen flex flex-col items-center gap-[20px]">
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
