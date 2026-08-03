import { motion } from 'framer-motion';

const techs = [
  {
    name: 'HTML',
    icon: (
      <svg viewBox="0 0 384 512" className="h-9 w-9" fill="#E34F26">
        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    icon: (
      <svg viewBox="0 0 384 512" className="h-9 w-9" fill="#1572B6">
        <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 448 512" className="h-9 w-9" fill="#F7DF1E">
        <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 36.8 0 56.7 17.1 68.6 38.6l-33.4 19.2c-7.2-12-16.2-20.7-33.4-20.7-13.5 0-23.7 7.5-23.7 18.6 0 11.1 8.7 16.5 24.6 23.4l10.5 4.5c34.3 14.7 54.7 31.3 54.7 66.4 0 35.8-25.5 59.1-65.1 59.1z" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg viewBox="-11.5 -10.2 23 20.4" className="h-10 w-10" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.218 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.418 8.976 12 6.001 12z" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#339933">
        <path d="M11.87 0l-9.75 5.63v12.74l9.75 5.63 9.75-5.63V5.63L11.87 0zm6.18 16.14l-6.18 3.56-6.18-3.56V9.01l6.18-3.56 6.18 3.56v7.13zM8.82 12.16v4l-3.13-1.8V9.32l3.13 1.8v2l-1.39-.8v3.6l1.39.8v-4.5h.01zm5.73-2.02v2.85l-1.38-.8v-2.05l-1.74-1v-1.6l3.12 1.8v.8zm.02-4.14v1.6l-3.13-1.8V4.2l3.13-1.8 3.13 1.8v3.6l-1.39-.8V6l-1.74-1-1.74 1v1.6l1.74 1h.01zM11.9 19.34l-3.12-1.8v-1.6l3.12 1.8 3.13-1.8v1.6l-3.13 1.8z" />
      </svg>
    ),
  },
  {
    name: '.NET',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#512BD4">
        <path d="M24 10.963a10.938 10.938 0 11-21.876 0 10.938 10.938 0 0121.876 0zm-14.869 3.018h2.09l1.637-4.137h.03s-.05 1.527-.05 2.19v1.947h1.492V7.126H12.24l-1.637 4.137h-.03s.05-1.507.05-2.17V7.126H9.131v6.855zm6.814 0h1.562V7.126h-1.562v6.855zM2.869 16.03a8.93 8.93 0 005.101 2.806V7.091A8.93 8.93 0 002.869 16.03zm13.08-9.028v5.526h2.981V7.002h-2.981zM8.97 18.836a8.93 8.93 0 006.98 0V7.152H8.97v11.684zM18.814 7.21v5.337h-1.306v1.442h4.425v-1.442h-1.557V7.21h1.417V5.768h-4.285v1.442h1.306z" />
      </svg>
    ),
  },
  {
    name: 'WPF',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.759 2.759c.64-.22 1.383-.073 1.898.441.815.816.815 2.138 0 2.954-.816.815-2.137.815-2.953 0-.514-.515-.658-1.258-.439-1.899L12.3 9.223v6.094c.221.64.077 1.383-.438 1.898-.816.815-2.138.815-2.954 0-.816-.816-.816-2.138 0-2.954.516-.516 1.259-.66 1.899-.44V7.727c-.64-.22-1.384-.075-1.9.44-.816.816-.816 2.139 0 2.955.816.815 2.138.815 2.954 0 .515-.515.658-1.258.438-1.9l2.759-2.759zM10.15 16.143c-.426.425-1.116.425-1.542 0-.426-.425-.426-1.116 0-1.542.426-.425 1.116-.425 1.542 0 .426.426.426 1.117 0 1.542zM10.15 8.917c-.426.425-1.116.425-1.542 0-.426-.425-.426-1.116 0-1.542.426-.425 1.116-.425 1.542 0 .426.426.426 1.117 0 1.542zM16.96 11.233c-.426.425-1.116.425-1.542 0-.426-.425-.426-1.116 0-1.542.426-.425 1.116-.425 1.542 0 .426.426.426 1.117 0 1.542z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="#181717">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'REST APIs',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
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