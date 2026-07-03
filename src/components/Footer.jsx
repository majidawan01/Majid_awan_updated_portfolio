function Footer() {
  return (
    <footer className="mt-20 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="flex flex-col gap-6 border-b border-[#E5DED3]/70 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#2B2B2B]">Majid Awan</p>
          <p className="text-sm text-[#6B6560]">Full Stack Developer</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B6560]">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-[#C1512F]">
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B6560]">
          <a href="https://github.com/majidawan01" target="_blank" rel="noreferrer" className="transition hover:text-[#C1512F]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/majid-awan-8210943a3/" target="_blank" rel="noreferrer" className="transition hover:text-[#C1512F]">
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-[#6B6560]">© 2026 Majid Awan. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center rounded-full border border-[#E5DED3]/70 bg-[#FFFFFF]/80 px-4 py-2 text-sm text-[#2B2B2B] transition hover:-translate-y-0.5">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
