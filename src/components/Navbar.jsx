const navLinks = [
  {
    id: 1,
    href: '#home',
    label: 'Home',
    icon: 'home',
  },
  {
    id: 2,
    href: '#about',
    label: 'About',
    icon: 'account_circle',
  },
  {
    id: 3,
    href: '#projects',
    label: 'Projects',
    icon: 'grid_view',
  },
  {
    id: 4,
    href: '#contact',
    label: 'Contact',
    icon: 'call',
  },
];

const Navbar = () => {
  return (
    <nav className="w-[250px] !m-auto !mt-[20px]  sm:w-[480px] h-[50px] xl:w-[500px] xl:h-[60px] border border-green-400  flex items-center justify-center gap-[20px] sm:gap-5 rounded-[5px] sm:rounded-xl z-10">
      {navLinks.map(({ id, href, label, icon }) => (
        <a
          key={id}
          href={href}
          className="px-3 py-2 cursor-pointer rounded-lg flex items-center sm:gap-[10px] no-underline text-white  hover:border-green-400 
          ` max-[450px]:p-[5px] max-[450px]:gap-0"
        >
          <span className="material-symbols-outlined text-green-400 text-base">
            {icon}
          </span>

          <span className="text-sm ml-1 hidden sm:block">{label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
