import { motion } from 'framer-motion';

const profileImage = '/profile.jpg';
const fallbackImage = 'https://avatars.githubusercontent.com/u/191031392?v=4';

function About() {
  return (
    <section id="about" className="relative mt-20 overflow-hidden rounded-[40px] border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-panel backdrop-blur-[28px] sm:p-10 lg:p-12">
      <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-[#C1512F]/15 blur-3xl" />
      <div className="absolute left-8 bottom-0 h-32 w-32 rounded-full bg-[#F0DCD3]/40 blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 rounded-[40px] border border-[#E5DED3]/70 bg-[#FFFFFF]/85 p-6 shadow-panel backdrop-blur-[24px] sm:p-8">
          <div className="absolute inset-x-6 top-0 h-32 rounded-[32px] bg-gradient-to-r from-[#C1512F]/20 via-transparent to-[#F0DCD3]/15 blur-3xl" />
          <div className="relative space-y-8 pt-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.28em] text-[#A3401F]">About Me</p>
              <h2 className="text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Professional Developer with a Premium Edge</h2>
              <p className="max-w-2xl text-[#6B6560] leading-8">
                I build modern, scalable, and high-performance applications for the web and desktop. My work focuses on clean architecture, intuitive UI, secure backend systems, and delightful user experiences.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Name', 'Majid Awan'],
                ['Profession', 'Full Stack Developer'],
                ['Specialization', 'MERN, Django & .NET WPF'],
                ['Location', 'Pakistan'],
                ['Availability', 'Freelance & Full-Time'],
              ].map(([label, value]) => (
                <div key={label} className="glass-card rounded-[28px] border border-[#E5DED3]/70 p-5 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#6B6560]">{label}</p>
                  <p className="mt-3 text-lg font-semibold text-[#2B2B2B]">{value}</p>
                </div>
              ))}
            </div>

            <a href="/Majid_Awan_Resume.pdf" download="Majid_Awan_Resume.pdf" className="inline-flex rounded-full border border-transparent bg-[#C1512F] px-6 py-3 text-sm font-semibold text-[#FAF7F2] transition-colors duration-300 hover:bg-[#A3401F]">
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto flex max-w-md justify-center">
          <div className="absolute inset-0 rounded-[40px] border border-[#E5DED3]/50 bg-gradient-to-br from-[#C1512F]/10 via-transparent to-[#F0DCD3]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[40px] border border-[#E5DED3]/70 bg-[#FBF7F2]/85 p-5 shadow-glow backdrop-blur-xl">
            <div className="relative h-[520px] w-full overflow-hidden rounded-[32px] border border-[#E5DED3]/70 bg-[#FFFFFF]/90 shadow-panel">
              <img
                src={profileImage}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = fallbackImage;
                }}
                alt="Majid Awan portrait"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-[28px] border border-[#E5DED3]/60 bg-[#FFFFFF]/80 p-4 backdrop-blur-xl">
                <p className="text-base font-semibold text-[#2B2B2B]">Majid Awan</p>
                <p className="mt-1 text-sm text-[#6B6560]">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
