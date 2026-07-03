import { motion } from 'framer-motion';

const services = [
  {
    title: 'Responsive Website Development',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#C1512F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M3 11h18" />
      </svg>
    ),
  },
  {
    title: 'React Applications',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A3401F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="M4.9 4.9l2.1 2.1" />
        <path d="M17 17l2.1 2.1" />
        <path d="M4.9 19.1l2.1-2.1" />
        <path d="M17 7l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: 'MERN Stack Development',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#C1512F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16v10H4z" />
        <path d="M4 11h16" />
        <path d="M8 7v10" />
      </svg>
    ),
  },
  {
    title: 'Django Backend Development',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A3401F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h6v10H4z" />
        <path d="M14 7h6v10h-6z" />
        <path d="M10 16h4" />
      </svg>
    ),
  },
  {
    title: 'REST API Development',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#C1512F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 12h10" />
        <path d="M17 8l2-2" />
        <path d="M17 16l2 2" />
      </svg>
    ),
  },
  {
    title: 'Desktop Software using .NET WPF',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A3401F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A3401F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h10" />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A3401F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" />
      </svg>
    ),
  },
  {
    title: 'Authentication Systems',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#C1512F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="8" rx="2" />
        <path d="M8 11V7a4 4 0 1 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: 'Database Design',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A3401F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="7" rx="7" ry="3" />
        <path d="M5 7v6c0 1.65 3.13 3 7 3s7-1.35 7-3V7" />
        <path d="M5 13c0 1.65 3.13 3 7 3s7-1.35 7-3" />
      </svg>
    ),
  },
  {
    title: 'Bug Fixing',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A3401F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 8.5V5" />
        <path d="M14 8.5V5" />
        <path d="M7 10l-3 3 3 3" />
        <path d="M17 10l3 3-3 3" />
        <path d="M10 19h4" />
        <path d="M12 8.5a4 4 0 1 0 0 7" />
      </svg>
    ),
  },
  {
    title: 'Deployment & Hosting',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#C1512F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22h14" />
        <path d="M12 2v16" />
        <path d="M8 14l4-4 4 4" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="mt-20 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#A3401F]">Services</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Premium Development Services</h2>
        </div>
        <p className="max-w-xl text-[#6B6560] sm:text-right">
          Tailored service cards for modern web, backend, desktop, and full-stack solutions.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="glass-card relative overflow-hidden rounded-[28px] border border-[#E5DED3]/70 p-6 shadow-soft hover:-translate-y-1 hover:border-[#C1512F]/20 hover:bg-[#FFFFFF]/70 transition-all duration-300"
          >
            <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-[#C1512F]/10 blur-2xl" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-tr from-[#C1512F]/20 via-[#A3401F]/15 to-[#F0DCD3]/20 text-[#2B2B2B] shadow-glow">
              {service.icon}
            </div>
            <p className="mt-6 text-lg font-semibold text-[#2B2B2B]">{service.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
