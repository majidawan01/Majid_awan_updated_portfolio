import { motion } from 'framer-motion';

const timeline = [
  {
    title: 'Frontend Development',
    period: '2022 - Present',
    description: 'Building modern interfaces and interactive experiences using React, Tailwind CSS, and responsive design best practices.',
  },
  {
    title: 'Backend Development',
    period: '2021 - Present',
    description: 'Creating scalable REST APIs, authentication systems, and database-driven backend services with Node.js.',
  },
  {
    title: 'Desktop Software',
    period: '2020 - Present',
    description: 'Designing and shipping polished .NET WPF desktop applications for professional business workflows.',
  },
  {
    title: 'Full Stack Projects',
    period: '2023 - Present',
    description: 'Delivering end-to-end systems from UI to server and database integration for product-ready solutions.',
  },
];

function Experience() {
  return (
    <section id="experience" className="mt-10 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#A3401F]">Experience</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Professional Timeline</h2>
        </div>
        <p className="max-w-xl text-[#6B6560] sm:text-right">
          A premium timeline highlighting frontend, backend, desktop, and full-stack experience.
        </p>
      </div>

      {/* Main changes here: Changed space-y-8 to a 2-column grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {timeline.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col justify-center rounded-[24px] border border-[#E5DED3]/70 bg-[#FFFFFF]/85 p-6 shadow-glow"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#6B6560]">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-[#2B2B2B]">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm text-[#6B6560] leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;