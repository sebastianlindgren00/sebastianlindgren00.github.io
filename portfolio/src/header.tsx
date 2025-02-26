const Header = () => {
  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 70; // Adjust this value to the height of your header or desired offset
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-deep-teal p-4 shadow-lg z-10 font-semibold">
      <div className="flex justify-start gap-x-10 pl-10">
        <button
          onClick={() => handleNavigation('profile')}
          className="hover:text-sky-blue hover:font-bold hover:scale-2"
        >
          Profile
        </button>
        <button
          onClick={() => handleNavigation('projects')}
          className="hover:text-sky-blue hover:font-bold hover:scale-2"
        >
          Projects
        </button>
        <button
          onClick={() => handleNavigation('career')}
          className="hover:text-sky-blue hover:font-bold hover:scale-2"
        >
          Career
        </button>
      </div>
    </div>
  );
};

export default Header;
