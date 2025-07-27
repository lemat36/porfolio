'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Decorative BG Circles */}
      <div className="absolute -bottom-36 -right-36 w-[400px] h-[400px] bg-[#FBDADA] rounded-full blur-3xl opacity-50 z-0" />

      {/* Floating Background Text */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none font-extrabold text-[#A74B5D] text-[5rem] sm:text-[7rem] md:text-[12rem] leading-none z-0"
      >
        About Me
      </motion.h2>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 sm:gap-16 md:gap-20">
        {/* Left Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="md:w-1/2"
        >
          <div className="relative bg-[#FBDADA] p-6 rounded-[2rem] shadow-2xl hover:scale-[1.03] transition-transform duration-500">
            {/* Glow circle */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FFF5F1] rounded-full z-0 opacity-50 blur-lg"></div>

            <Image
              src="/images/g.png"
              alt="Savia Yarba"
              width={520}
              height={620}
              className="relative z-10 rounded-[2rem] object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="md:w-1/2 text-center md:text-left px-2 md:px-0"
        >
          <h3 className="font-serif font-extrabold text-[#4B2E2E] text-3xl sm:text-4xl md:text-5xl mb-8 tracking-tight leading-tight">
            I’m Savia Yarba
          </h3>
          <p className="text-[#6F4E4E] text-base sm:text-lg md:text-xl max-w-full sm:max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed tracking-wide">
            I'm a passionate Frontend Developer who brings life to ideas through
            beautiful visuals and modern interfaces. I care about pixel-perfect
            designs, expressive UI, and creating digital elegance that feels
            human.
          </p>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start max-w-xl mx-auto md:mx-0">
            <span className="px-6 py-3 bg-white text-[#A74B5D] font-semibold text-sm rounded-full border border-[#FBDADA] shadow-[0_2px_12px_rgba(247,202,202,0.4)] hover:bg-[#FBDADA]/30 transition duration-300">
              3+ Years Experience
            </span>
            <span className="px-6 py-3 bg-white text-[#4B2E2E] font-semibold text-sm rounded-full border border-[#FFECE8] shadow-[0_2px_12px_rgba(255,236,232,0.4)] hover:bg-[#FFECE8]/30 transition duration-300">
              30+ Happy Clients
            </span>
            <span className="px-6 py-3 bg-white text-[#A74B5D] font-semibold text-sm rounded-full border border-[#FFF5F1] shadow-[0_2px_12px_rgba(255,245,241,0.4)] hover:bg-[#FFF5F1]/30 transition duration-300">
              10+ Projects Completed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
