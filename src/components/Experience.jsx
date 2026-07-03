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
    description: 'Creating scalable REST APIs, authentication systems, and database-driven backend services with Node.js and Django.',
  },
  {
    title: 'Desktop Software Development',
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
    <section id="experience" className="mt-20 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#A3401F]">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Professional Timeline</h2>
        </div>
        <p className="max-w-xl text-[#6B6560] sm:text-right">
          A premium timeline highlighting frontend, backend, desktop, and full-stack experience.
        </p>
      </div>

      <div className="space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="grid gap-4 rounded-[28px] border border-[#E5DED3]/70 bg-[#FFFFFF]/85 p-6 shadow-glow sm:grid-cols-[0.3fr_0.7fr]"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#6B6560]">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2B2B2B]">{item.title}</h3>
            </div>
            <p className="text-[#6B6560] leading-7">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
