import { motion } from 'framer-motion';

const titles = ['Full Stack Developer', 'MERN Developer', 'Django Developer', 'React Developer', '.NET WPF Developer'];
const profileImage = '/profile.jpg';
const fallbackImage = 'https://avatars.githubusercontent.com/u/191031392?v=4';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[40px] border border-[#E5DED3]/50 bg-[#FBF2EC]/90 p-6 shadow-panel backdrop-blur-[28px] sm:p-10 lg:p-12">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#C1512F]/15 to-transparent blur-3xl" />
      <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#C1512F]/20 blur-3xl" />
      <div className="absolute right-10 top-16 h-28 w-28 rounded-full bg-[#F0DCD3]/50 blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10 space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5DED3]/70 bg-[#FFFFFF]/80 px-4 py-2 text-sm text-[#6B6560] shadow-glow">
          Full Stack Developer | MERN & .NET
          </div>
          <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-semibold tracking-[0.02em] text-[#2B2B2B] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-[#C1512F]">Majid Awan</span>
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#6B6560] sm:text-base">
              <span className="text-[#6B6560]">I am a</span>
              <span className="rounded-full border border-[#D9D1C8]/60 bg-[#F3EEE6]/80 px-4 py-2 text-[#2B2B2B] shadow-sm">{titles[0]}</span>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.12 }} className="max-w-xl text-lg leading-8 text-[#6B6560] sm:text-xl">
            Hi, I&apos;m Majid Awan, a passionate Full Stack Developer building modern, scalable web applications and professional desktop software. I create responsive UIs, secure backends, and efficient database architectures with elegant user experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.18 }} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-[#C1512F] px-6 py-3 text-sm font-semibold text-[#FAF7F2] transition-colors duration-300 hover:bg-[#A3401F]">
              View Projects
            </a>
            <a href="https://github.com/majidawan01" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#E5DED3]/70 bg-[#FAF7F2]/80 px-6 py-3 text-sm font-semibold text-[#2B2B2B] transition hover:bg-[#F0DCD3]/80 hover:border-[#C1512F]/30">
              View GitHub
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.24 }} className="flex flex-wrap items-center gap-3 text-[#6B6560]">
            {[
              { label: 'GitHub', href: 'https://github.com/majidawan01' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/majid-awan-8210943a3/' },
              { label: 'Email', href: 'mailto:majidawan01@gmail.com' },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-[#E5DED3]/70 bg-[#FFFFFF]/85 px-4 py-3 text-sm text-[#2B2B2B] transition hover:border-[#C1512F]/50 hover:text-[#2B2B2B]">
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative mx-auto flex max-w-[440px] justify-center">
          <div className="absolute inset-0 rounded-[48px] border border-[#E5DED3]/40 bg-[#F3EEE6]/80 shadow-glow" />
          <div className="relative z-10 flex h-[420px] w-[420px] items-center justify-center rounded-[48px] border border-[#E5DED3]/60 bg-[#F3EEE6]/80 p-3 shadow-soft backdrop-blur-xl">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#C1512F]/20 via-[#A3401F]/15 to-[#F0DCD3]/10 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[36px] border border-[#E5DED3]/60 bg-[#FAF7F2] shadow-panel">
              <img
                src={profileImage}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = fallbackImage;
                }}
                alt="Majid Awan"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute -right-10 top-1/2 h-28 w-28 rounded-full border border-[#C1512F]/20 bg-[#C1512F]/10 blur-2xl" />
            <div className="pointer-events-none absolute -left-10 bottom-10 h-24 w-24 rounded-full border border-[#A3401F]/20 bg-[#A3401F]/10 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
