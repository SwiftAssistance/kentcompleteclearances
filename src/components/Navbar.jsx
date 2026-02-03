import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck, Phone, CheckCircle2, Clock, Menu, X } from 'lucide-react';
import { Button } from './ui';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on any route change
  useEffect(() => { setIsMenuOpen(false); }, [location]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;
  const isServicePage = location.pathname.startsWith('/services');

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleNavClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-xs md:text-sm font-bold tracking-wide">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-500" /> Licensed Waste Carrier (CBDU12345)</span>
            <span className="hidden md:flex items-center gap-2"><Clock className="w-4 h-4 text-red-500" /> Same Day Service Available</span>
          </div>
          <a href="tel:01622000000" className="hover:text-red-400 transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3" /> 01622 000 000
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-slate-900 ${scrolled ? 'bg-white/95 backdrop-blur-sm py-3' : 'bg-white py-4 md:py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
            <div className="bg-red-600 text-white p-2 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-black uppercase leading-none tracking-tighter block">
                Kent Complete<br /><span className="text-red-600">Clearances</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`hover:text-red-600 transition-colors ${isActive(link.to) || (link.to === '/services' && isServicePage) ? 'text-red-600' : ''}`}>
                {link.label}
              </Link>
            ))}
            <Button as="link" to="/contact" variant="primary" className="py-2 px-4 text-sm animate-pulse-subtle">
              <Phone className="w-4 h-4" /> Get a Quote
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        {isMenuOpen && (
          <>
            <div className="md:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setIsMenuOpen(false)} />
            <div className="md:hidden bg-white border-t-2 border-slate-900 absolute w-full shadow-xl z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleNavClick}
                    className={`py-3 px-4 font-bold uppercase text-lg border-b border-slate-100 transition-colors ${isActive(link.to) || (link.to === '/services' && isServicePage) ? 'text-red-600 bg-red-50' : 'hover:bg-slate-50'}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-3 space-y-2">
                  <a href="tel:01622000000" className="block py-3 bg-red-600 text-center text-white font-black uppercase text-sm border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                    <span className="flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> Call 01622 000 000</span>
                  </a>
                  <Link to="/contact" onClick={handleNavClick} className="block py-3 bg-slate-900 text-center text-white font-black uppercase text-sm border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
