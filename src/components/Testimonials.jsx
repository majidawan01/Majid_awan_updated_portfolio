import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aisha Khan',
    company: 'TechWave',
    rating: 5,
    review: 'Majid delivered a polished app with excellent communication and outstanding frontend design.',
  },
  {
    name: 'Bilal Tariq',
    company: 'NexaSoft',
    rating: 5,
    review: 'High-quality backend architecture and professional desktop software delivery.',
  },
  {
    name: 'Sara Malik',
    company: 'ShiftLabs',
    rating: 5,
    review: 'A talented full stack developer with strong attention to UX and performance.',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="mt-20 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#A3401F]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Trusted by Clients</h2>
        </div>
        <p className="max-w-xl text-[#6B6560] sm:text-right">
          Glassy review cards with premium styling and warm client feedback.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="glass-card rounded-[32px] border border-[#E5DED3]/70 p-6 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#C1512F]/30 to-[#F0DCD3]/30" />
              <div>
                <p className="font-semibold text-[#2B2B2B]">{testimonial.name}</p>
                <p className="text-sm text-[#6B6560]">{testimonial.company}</p>
              </div>
            </div>
            <div className="mt-5 flex gap-1 text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                <span key={ratingIndex}>★</span>
              ))}
            </div>
            <p className="mt-5 text-[#6B6560] leading-7">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
