import { useEffect, useState } from 'react';
import logo from '../../assets/pokeball.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`flex item-center justify-center fixed gap-2 p-4 top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow' : 'bg-transparent'
      }`}
    >
      <img src={logo} alt='' />
      <div className='text-[20px] md:text-[28px] text-neutral-900 font-bold '>
        Pokedex
      </div>
    </div>
  );
};

export default Navbar;
