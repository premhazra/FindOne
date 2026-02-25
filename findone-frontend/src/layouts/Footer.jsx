import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from '@components/common/Logo';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@data/navigation';

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-400">
      {/* Newsletter strip */}
      <div className="border-b border-white/5">
        <div className="container-app py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Stay in the loop</h3>
              <p className="text-sm text-slate-400 mt-1">Get updates on new features and marketplace insights.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-colors"
              />
              <button className="px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition-colors flex items-center gap-2 flex-shrink-0">
                Subscribe
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-app py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm leading-relaxed max-w-[260px]">
              Find Skilled Professionals Instantly. AI-powered matching
              connecting you with verified workers since 2024.
            </p>
            <div className="flex items-center gap-2.5 mt-6">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-500 hover:text-white transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} FindOne. All rights reserved.
          </span>
          <span className="text-sm text-slate-500 flex items-center gap-1.5">
            Made with <span className="text-red-400">♥</span> in India 🇮🇳
          </span>
        </div>
      </div>
    </footer>
  );
}
