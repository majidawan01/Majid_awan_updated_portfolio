import { motion } from 'framer-motion';

const techs = [
  {
    name: 'HTML',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <path d="M10 8h44l-4 44-18 6-18-6-4-44Z" fill="#E44D26" />
        <path d="M32 46.8 45.7 41l2.8-31.3H32V46.8ZM32 46.8V16.7H18.8l.8 8.8H32v8.5L22.5 40.1" fill="#fff" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <path d="M10 8h44l-4 44-18 6-18-6-4-44Z" fill="#1572B6" />
        <path d="M32 46.8 45.7 41l2.8-31.3H32V46.8ZM32 46.8V16.7H18.8l.8 8.8H32v8.5L22.5 40.1" fill="#fff" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <rect width="64" height="64" rx="12" fill="#F7DF1E" />
        <path d="M26 20h8c3.3 0 6 2.7 6 6v12c0 3.3-2.7 6-6 6h-8v-4h8c1.1 0 2-.9 2-2V26c0-1.1-.9-2-2-2h-8v-4Z" fill="#000" />
        <path d="M37.5 44c1.4 0 2.5-1.1 2.5-2.5V22.5C40 21.1 38.9 20 37.5 20h-1.5v24H37.5Z" fill="#000" opacity="0.75" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <circle cx="32" cy="32" r="10" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="3" strokeLinecap="round">
          <ellipse cx="32" cy="32" rx="20" ry="8" />
          <ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(120 32 32)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <rect width="64" height="64" rx="16" fill="#C1512F" />
        <path d="M18 36c10-8 18-5 22-1 6 6 10 10 18 6" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <path d="M12 18v28l20 11 20-11V18L32 7 12 18Z" fill="#339933" />
        <path d="M24 32l8 4 8-4" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Django',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <rect width="64" height="64" rx="16" fill="#092E20" />
        <path d="M18 20h8c6 0 8 4 8 8s-2 8-8 8h-4v8" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: '.NET',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <rect width="64" height="64" rx="16" fill="#512BD4" />
        <path d="M22 20h20v24H22z" stroke="#fff" strokeWidth="4" />
        <path d="M22 32h20" stroke="#fff" strokeWidth="4" />
      </svg>
    ),
  },
  {
    name: 'WPF',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <rect width="64" height="64" rx="16" fill="#0F172A" />
        <path d="M16 20h32v8H16zM16 36h14v12H16zM34 36h14v12H34z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <rect width="64" height="64" rx="16" fill="#F05032" />
        <circle cx="20" cy="20" r="6" fill="#fff" />
        <circle cx="44" cy="32" r="6" fill="#fff" />
        <circle cx="20" cy="44" r="6" fill="#fff" />
        <path d="M23 23l17 9" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <rect width="64" height="64" rx="16" fill="#181717" />
        <path d="M32 16c-9 0-16 7-16 16 0 6.9 4.5 12.7 10.7 14.8.8.1 1.1-.3 1.1-.8 0-.4 0-1.5 0-2.9-4.4 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.4-.9.1-.9.1-.9 1.6.1 2.4 1.6 2.4 1.6 1.4 2.4 3.7 1.7 4.6 1.3.1-1 0-1.7.3-2.1-3.5-.4-7.2-1.7-7.2-7.5 0-1.7.6-3.1 1.6-4.2-.2-.4-.7-2.1.2-4.4 0 0 1.3-.4 4.4 1.6 1.3-.4 2.6-.6 4-.6s2.7.2 4 .6c3.1-2 4.4-1.6 4.4-1.6.8 2.3.3 4 .2 4.4 1 1.1 1.6 2.5 1.6 4.2 0 5.8-3.7 7.1-7.2 7.5.2.2.4.6.4 1.2 0 .9 0 1.7 0 1.9 0 .5.3.9 1.1.8C43.5 44.7 48 38.9 48 32c0-9-7-16-16-16Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'REST APIs',
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <rect width="64" height="64" rx="16" fill="#0F172A" />
        <path d="M20 24h24M20 32h24M20 40h24" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="44" cy="24" r="4" fill="#38BDF8" />
      </svg>
    ),
  },
];

function Technologies() {
  return (
    <section id="technologies" className="mt-20 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#A3401F]">Technologies</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Tools & Frameworks</h2>
        </div>
        <p className="max-w-xl text-[#6B6560] sm:text-right">
          Animated technology grid with glow interactions for each core tool.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="glass-card rounded-[28px] border border-[#E5DED3]/70 p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFFFFF]/80 shadow-md">
              {tech.icon}
            </div>
            <p className="mt-5 text-lg font-semibold text-[#2B2B2B]">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
