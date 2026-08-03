import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="relative mt-20 overflow-hidden rounded-[32px] border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-panel backdrop-blur-[28px] sm:rounded-[40px] sm:p-10 lg:p-12">
      <div className="absolute -right-16 top-0 h-28 w-28 rounded-full bg-[#C1512F]/15 blur-3xl sm:-right-20 sm:h-40 sm:w-40" />
      <div className="absolute left-6 bottom-0 h-24 w-24 rounded-full bg-[#F0DCD3]/40 blur-3xl sm:left-8 sm:h-32 sm:w-32" />

      {/* Full Width Balanced Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full flex flex-col rounded-[28px] border border-[#E5DED3]/70 bg-[#FFFFFF]/85 p-6 shadow-panel backdrop-blur-[24px] sm:rounded-[32px] sm:p-8 lg:p-10"
      >
        <div className="absolute inset-x-6 top-0 h-32 rounded-[32px] bg-gradient-to-r from-[#C1512F]/20 via-transparent to-[#F0DCD3]/15 blur-3xl" />
        
        <div className="relative flex flex-col space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#A3401F] sm:text-xs">About Me</p>
            <h2 className="text-2xl font-semibold leading-tight text-[#2B2B2B] sm:text-3xl lg:text-4xl">
              Professional Developer with a Premium Edge
            </h2>
            <p className="text-sm leading-6 text-[#6B6560] sm:text-base sm:leading-7 max-w-3xl">
              I build modern, scalable, and high-performance applications for the web and desktop. My work focuses on clean architecture, intuitive UI, secure backend systems, and delightful user experiences.
            </p>
          </div>

          {/* Balanced Info Cards Grid (3 columns on desktop, perfectly spread) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['Name', 'Majid Awan'],
              ['Profession', 'Full Stack Developer'],
              ['Specialization', 'MERN & .NET WPF'],
              ['Location', 'Pakistan'],
              ['Availability', 'Freelance & Full-Time'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="glass-card rounded-[16px] border border-[#E5DED3]/70 p-4 shadow-soft transition-transform duration-300 hover:-translate-y-0.5 sm:rounded-[20px]"
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#6B6560] sm:text-[10px] sm:tracking-[0.24em]">{label}</p>
                <p className="mt-1 text-xs font-semibold leading-snug text-[#2B2B2B] sm:mt-1.5 sm:text-sm">{value}</p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-start">
            <a
              href="/Majid_Awan_Resume.pdf"
              download="Majid_Awan_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#C1512F] px-8 py-3.5 text-sm font-semibold text-[#FAF7F2] transition-colors duration-300 hover:bg-[#A3401F]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;