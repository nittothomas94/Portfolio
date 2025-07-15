// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        dropIn: 'dropIn 1s ease-out forwards',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        dropIn: {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  // ...
};
