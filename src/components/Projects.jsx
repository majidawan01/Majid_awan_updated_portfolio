import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Furniture Store',
    description: 'Modern e-commerce storefront built with JavaScript and deployed on Vercel.',
    badges: ['JavaScript', 'Tailwind', 'React'],
    github: 'https://github.com/majidawan01/furniture-store',
    demo: 'https://furniture-store-kappa-snowy.vercel.app',
    image: 'https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZSUyMHN0b3JlfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Portfolio Website',
    description: 'A premium personal portfolio site showcasing skills, projects, and developer branding.',
    badges: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/majidawan01/my-portfolio',
    demo: 'https://my-portfolio-blue-zeta-79.vercel.app',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Rent-A-Car System',
    description: 'Professional .NET WPF desktop application using EF Core for vehicle rental management.',
    badges: ['C#', '.NET', 'WPF', 'EF Core'],
    github: 'https://github.com/majidawan01/RentACarSystem',
    image: 'https://images.unsplash.com/photo-1630165356623-266076eaceb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwcmVudHxlbnwwfHwwfHx8MA%3D%3D://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pharmacy Management System',
    description: 'Client-side pharmacy inventory and sales software built with .NET WPF.',
    badges: ['C#', '.NET', 'WPF'],
    github: 'https://github.com/majidawan01/Pharmacy_Management_System',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D',
  },
];

function Projects() {
  return (
    <section id="projects" className="mt-20 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#A3401F]">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Featured Work</h2>
        </div>
        <p className="max-w-xl text-[#6B6560] sm:text-right">
          Showcase of premium projects across modern web and desktop development.
        </p>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[32px] border border-[#E5DED3]/70 bg-[#FFFFFF]/80 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="h-56 overflow-hidden rounded-[32px] bg-[#E5DED3]/20 shadow-inner">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-5 p-6">
              <h3 className="text-2xl font-semibold text-[#2B2B2B]">{project.title}</h3>
              <p className="text-[#6B6560] leading-7">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-[#E5DED3]/70 bg-[#FBF7F2]/80 px-3 py-1 text-sm text-[#6B6560]">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-[#E5DED3]/70 bg-[#FBF7F2]/80 px-4 py-2 text-sm font-semibold text-[#2B2B2B] transition hover:border-[#C1512F]/50">
                  GitHub
                </a>
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-transparent bg-[#C1512F] px-4 py-2 text-sm font-semibold text-[#FAF7F2] transition-colors duration-300 hover:bg-[#A3401F]">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-[#6B6560] sm:flex-row sm:justify-between">
        <p className="text-sm">Explore more repositories and complete work on GitHub.</p>
        <a href="https://github.com/majidawan01" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-[#E5DED3]/70 bg-[#FFFFFF]/85 px-5 py-3 text-sm font-semibold text-[#2B2B2B] transition hover:border-[#C1512F]/50 hover:-translate-y-0.5">
          View All GitHub Repos
        </a>
      </div>
    </section>
  );
}

export default Projects;
