import { Box } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        for (const section of [...sections].reverse()) {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 100) {
            setActiveSection(section);
            break;
          }
        }
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter group flex items-center gap-2">
          <Box className="w-8 h-8 text-accent-orange group-hover:text-accent-blue transition-colors duration-300" />
          <span className="text-white">OLIVER</span>
          <span className="text-accent-orange group-hover:text-accent-blue transition-colors duration-300">.3D</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.includes('#') ? item.href.split('#')[1] : 'home';
            const isActive = location.pathname === '/' && activeSection === sectionId;
            
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium uppercase tracking-widest transition-all relative group ${
                  isActive ? 'text-accent-orange' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent-orange shadow-[0_0_8px_rgba(255,107,0,0.8)]"
                  />
                )}
              </a>
            );
          })}
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
