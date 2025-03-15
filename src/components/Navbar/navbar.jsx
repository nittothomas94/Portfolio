import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home" className="nav-item">
        <span class="material-symbols-outlined">home</span>
        Home
      </a>
      <a href="#about" className="nav-item">
        <span class="material-symbols-outlined">account_circle</span>
        About
      </a>
      <a href="#projects" className="nav-item">
        <span class="material-symbols-outlined">grid_view</span>
        Projects
      </a>
      <a href="#contact" className="nav-item">
        <span class="material-symbols-outlined">call</span>
        Contact
      </a>
    </div>
  );
};

export default Navbar;
