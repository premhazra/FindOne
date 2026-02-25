import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '@components/common/Logo';
import Button from '@components/common/Button';
import { NAV_LINKS } from '@data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Active section tracking via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ── Smooth scroll for hash links ── */
  const handleAnchorClick = useCallback((e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100'
          : 'bg-transparent'
        }
      `}
    >
      <div className="container-app flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <Logo variant={scrolled ? 'dark' : 'white'} />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const sectionId = href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleAnchorClick(e, href)}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${scrolled
                      ? isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                      : isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button variant={scrolled ? 'ghost' : 'ghost-white'} size="sm">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button variant={scrolled ? 'primary' : 'gradient'} size="sm">
              Get Started
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`
            lg:hidden relative z-10 p-2 rounded-lg transition-colors
            ${mobileOpen
              ? 'bg-slate-100 text-slate-700'
              : scrolled
                ? 'hover:bg-slate-100 text-slate-700'
                : 'hover:bg-white/10 text-white'
            }
          `}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`
          lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`
          lg:hidden fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-40
          shadow-2xl transition-transform duration-300 ease-out
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <Logo variant="dark" size="sm" />
            <button
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = activeSection === href.replace('#', '');
                return (
                  <a
                    key={href}
                    href={href}
                    className={`
                      py-3 px-4 text-base font-medium rounded-xl transition-all duration-200
                      ${isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                      }
                    `}
                    onClick={(e) => handleAnchorClick(e, href)}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 space-y-2">
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="ghost" size="lg" className="w-full justify-center">
                Log In
              </Button>
            </Link>
            <Link to="/register" onClick={() => setMobileOpen(false)}>
              <Button variant="gradient" size="lg" className="w-full justify-center">
                Get Started
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
