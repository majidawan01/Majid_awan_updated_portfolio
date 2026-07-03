export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bg: '#FAF7F2',
        panel: '#F3EEE6',
        surface: '#F3EEE6',
        card: 'rgba(255,255,255,0.76)',
        heading: '#2B2B2B',
        text: '#2B2B2B',
        muted: '#6B6560',
        accent: '#C1512F',
        accentDark: '#A3401F',
        accentSoft: '#F0DCD3',
        border: '#E5DED3',
      },
      boxShadow: {
        glow: '0 30px 90px rgba(193, 81, 47, 0.16)',
        soft: '0 18px 40px rgba(43, 43, 43, 0.12)',
        panel: '0 0 0 1px rgba(229,222,211,0.4), 0 30px 80px rgba(43,43,43,0.08)',
        inset: 'inset 0 0 0 1px rgba(229,222,211,0.24)',
      },
      backgroundImage: {
        'hero-warm': 'radial-gradient(circle at 10% 10%, rgba(193,81,47,0.14), transparent 20%), radial-gradient(circle at 80% 20%, rgba(193,81,47,0.08), transparent 24%), radial-gradient(circle at 80% 90%, rgba(240,220,211,0.22), transparent 26%)',
        'grid-dots': 'radial-gradient(circle, rgba(43,43,43,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
