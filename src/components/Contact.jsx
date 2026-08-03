import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');
const formData = new FormData(event.target);
formData.append('access_key', 'c2986f1b-dd8c-41bf-918a-12f277d51901');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Message Sent Successfully! 🎉');
      setIsSubmitting(false);
      event.target.reset();
      setTimeout(() => setResult(''), 5000);
    } else {
      console.log('Error', data);
      setResult(data.message || 'Something went wrong!');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mt-20 rounded-[36px] border border-[#E5DED3]/70 bg-[#FBF2EC]/90 p-8 shadow-soft backdrop-blur-xl sm:p-12">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        
        {/* Left Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -24 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.35em] text-[#A3401F] bg-[#C1512F]/10 px-3 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2B2B2B] sm:text-4xl">
            Let&apos;s build your next idea together.
          </h2>
          <p className="mt-4 max-w-md text-[#6B6560] leading-relaxed">
            Reach out for collaboration, freelance, or full-time opportunities. I&apos;m available for web and desktop application projects.
          </p>

          <div className="mt-8 space-y-4 rounded-[28px] border border-[#E5DED3]/70 bg-[#FFFFFF]/90 p-6 shadow-glow">
            
            {/* Email */}
            <a href="mailto:majidrafiqueawan@gmail.com" className="flex items-center gap-4 group transition">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FBF2EC] text-[#C1512F] transition group-hover:bg-[#C1512F] group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B6560]">Email Me</p>
                <p className="text-sm sm:text-base font-semibold text-[#2B2B2B] group-hover:text-[#C1512F] transition">majidrafiqueawan@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:03440232857" className="flex items-center gap-4 group transition">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FBF2EC] text-[#C1512F] transition group-hover:bg-[#C1512F] group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B6560]">Phone</p>
                <p className="text-sm sm:text-base font-semibold text-[#2B2B2B] group-hover:text-[#C1512F] transition">03440232857</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FBF2EC] text-[#C1512F]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B6560]">Location</p>
                <p className="text-sm sm:text-base font-semibold text-[#2B2B2B]">Lahore, Pakistan</p>
              </div>
            </div>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/majid-awan-8210943a3" target="_blank" rel="noreferrer" className="flex items-center gap-4 group transition">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FBF2EC] text-[#C1512F] transition group-hover:bg-[#C1512F] group-hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B6560]">LinkedIn</p>
                <p className="text-sm sm:text-base font-semibold text-[#2B2B2B] group-hover:text-[#C1512F] transition truncate max-w-[200px] sm:max-w-xs">majid-awan-8210943a3</p>
              </div>
            </a>

          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form 
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 24 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="space-y-5 rounded-[32px] border border-[#E5DED3]/70 bg-[#FFFFFF]/95 p-8 shadow-soft"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[#6B6560]">
              <span>Your Name</span>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Majid Awan" 
                className="w-full rounded-2xl border border-[#E5DED3]/80 bg-[#FBF7F2]/50 px-4 py-3.5 text-[#2B2B2B] outline-none transition focus:border-[#C1512F] focus:bg-white focus:ring-2 focus:ring-[#C1512F]/20" 
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[#6B6560]">
              <span>Your Email</span>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="majid@example.com" 
                className="w-full rounded-2xl border border-[#E5DED3]/80 bg-[#FBF7F2]/50 px-4 py-3.5 text-[#2B2B2B] outline-none transition focus:border-[#C1512F] focus:bg-white focus:ring-2 focus:ring-[#C1512F]/20" 
              />
            </label>
          </div>

          <label className="block space-y-2 text-sm font-medium text-[#6B6560]">
            <span>Subject</span>
            <input 
              type="text" 
              name="subject" 
              required 
              placeholder="Project Inquiry / Freelance" 
              className="w-full rounded-2xl border border-[#E5DED3]/80 bg-[#FBF7F2]/50 px-4 py-3.5 text-[#2B2B2B] outline-none transition focus:border-[#C1512F] focus:bg-white focus:ring-2 focus:ring-[#C1512F]/20" 
            />
          </label>

          <label className="block space-y-2 text-sm font-medium text-[#6B6560]">
            <span>Message</span>
            <textarea 
              name="message" 
              required 
              rows="4" 
              placeholder="Write your message here..." 
              className="w-full rounded-2xl border border-[#E5DED3]/80 bg-[#FBF7F2]/50 px-4 py-3.5 text-[#2B2B2B] outline-none transition focus:border-[#C1512F] focus:bg-white focus:ring-2 focus:ring-[#C1512F]/20 resize-none" 
            />
          </label>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#C1512F] px-6 py-4 text-sm font-bold text-[#FAF7F2] shadow-lg shadow-[#C1512F]/30 transition-all duration-300 hover:bg-[#A3401F] hover:shadow-xl disabled:opacity-75"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {result && (
            <p className="text-center text-sm font-medium text-[#C1512F] mt-2">{result}</p>
          )}
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;