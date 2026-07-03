import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="mt-20 rounded-3xl border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-[#A3401F]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">Let&apos;s build your next idea.</h2>
          <p className="mt-5 max-w-lg text-[#6B6560] leading-8">
            Reach out for collaboration, freelance, or full-time opportunities. I&apos;m available for web and desktop application projects.
          </p>

          <div className="mt-10 space-y-5 rounded-[32px] border border-[#E5DED3]/70 bg-[#FFFFFF]/80 p-6 shadow-glow">
            {[
              ['Email', 'majidrafiqueawan@gmail.com'],
              ['Phone', '03440232857'],
              ['Location', 'Lahore, Pakistan'],
              ['LinkedIn', 'linkedin.com/in/majid-awan-8210943a3'],
            ].map(([label, value]) => (
              <div key={label} className="space-y-1">
                <p className="text-sm uppercase tracking-[0.3em] text-[#6B6560]">{label}</p>
                <p className="text-lg font-semibold text-[#2B2B2B]">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-5 rounded-[32px] border border-[#E5DED3]/70 bg-[#FFFFFF]/85 p-6 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-[#6B6560]">
              <span>Name</span>
              <input type="text" placeholder="Your Name" className="w-full rounded-3xl border border-[#E5DED3]/60 bg-[#FBF7F2]/70 px-4 py-3 text-[#2B2B2B] outline-none transition focus:border-[#C1512F]" />
            </label>
            <label className="space-y-2 text-sm text-[#6B6560]">
              <span>Email</span>
              <input type="email" placeholder="Your Email" className="w-full rounded-3xl border border-[#E5DED3]/60 bg-[#FBF7F2]/70 px-4 py-3 text-[#2B2B2B] outline-none transition focus:border-[#C1512F]" />
            </label>
          </div>
          <label className="space-y-2 text-sm text-[#6B6560]">
            <span>Subject</span>
            <input type="text" placeholder="Subject" className="w-full rounded-3xl border border-[#E5DED3]/60 bg-[#FBF7F2]/70 px-4 py-3 text-[#2B2B2B] outline-none transition focus:border-[#C1512F]" />
          </label>
          <label className="space-y-2 text-sm text-[#6B6560]">
            <span>Message</span>
            <textarea rows="5" placeholder="Write your message..." className="w-full rounded-3xl border border-[#E5DED3]/60 bg-[#FBF7F2]/70 px-4 py-3 text-[#2B2B2B] outline-none transition focus:border-[#C1512F]" />
          </label>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#C1512F] px-6 py-3 text-sm font-semibold text-[#FAF7F2] transition-colors duration-300 hover:bg-[#A3401F]">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
