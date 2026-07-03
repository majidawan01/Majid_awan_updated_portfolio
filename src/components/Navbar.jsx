import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DED3]/70 bg-[#FBF2EC]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="text-lg font-semibold tracking-[0.24em] text-[#2B2B2B]">
          MAJID
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6B6560] transition hover:text-[#2B2B2B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="rounded-full border border-transparent bg-[#C1512F] px-5 py-2.5 text-sm font-semibold text-[#FAF7F2] transition-colors duration-300 hover:bg-[#A3401F]"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DED3]/70 bg-[#FFFFFF]/85 text-[#2B2B2B] md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="border-t border-[#E5DED3]/70 bg-[#FBF2EC]/90 px-6 py-5 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[#6B6560] transition hover:text-[#2B2B2B]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#C1512F] px-5 py-3 text-sm font-semibold text-[#FAF7F2] transition-colors duration-300 hover:bg-[#A3401F]"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
