import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 95, description: 'Semantic and accessible markup.' },
  { name: 'CSS3', level: 90, description: 'Modern responsive styling.' },
  { name: 'JavaScript', level: 90, description: 'ES6+ logic and interactions.' },
  { name: 'React', level: 88, description: 'Component-driven UI architecture.' },
  { name: 'Tailwind CSS', level: 92, description: 'Utility-first styling system.' },
  { name: 'Node.js', level: 85, description: 'Fast backend servers.' },
  { name: 'Django', level: 80, description: 'Robust Python backend systems.' },
  { name: '.NET WPF', level: 90, description: 'Desktop application development.' },
];

function Skills() {
  return (
    <section id="skills" className="mt-20 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#A3401F]">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Tech Skills & Expertise</h2>
        </div>
        <p className="max-w-xl text-[#6B6560] sm:text-right">
          Animated glass cards highlight core technologies across frontend, backend, and desktop development with polished progress indicators.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass-card rounded-[28px] border border-[#E5DED3]/70 p-6 shadow-soft hover:-translate-y-1 hover:border-[#C1512F]/20 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-[#2B2B2B]">{skill.name}</p>
                <p className="mt-2 text-sm text-[#6B6560]">{skill.description}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#FFFFFF]/80 text-sm font-semibold text-[#2B2B2B]">
                {skill.level}%
              </div>
            </div>

            <div className="mt-6 h-3 rounded-full bg-[#F0DCD3]/50">
              <div className="h-full rounded-full bg-gradient-to-r from-[#C1512F] via-[#A3401F] to-[#F0DCD3] transition-all" style={{ width: `${skill.level}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
