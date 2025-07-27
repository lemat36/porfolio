'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#FFF5F1] text-[#4B2E2E] px-6 pt-20 pb-20 overflow-hidden rounded-b-[15%]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4 leading-snug sm:leading-tight">
            Your Personality is What Makes You
            <br className="hidden md:block" />
            <span className="text-[#A74B5D]"> Character</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6F4E4E] mb-8 max-w-md mx-auto lg:mx-0">
            I'm a Frontend Developer, helping brands stand out with elegant digital presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-xs sm:max-w-full mx-auto lg:mx-0">
            <a
              href="/mon cv.pdf"
              download="Savia_Yarba_CV.pdf"
              className="bg-[#A74B5D] text-white px-6 py-3 rounded-full font-medium transition hover:bg-[#922c44] text-center w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A74B5D] focus-visible:ring-offset-2"
            >
              Download CV
            </a>
            <a
              href="mailto:savia.yarba@gmail.com?subject=Let's%20Talk"
              className="border border-[#A74B5D] text-[#A74B5D] px-6 py-3 rounded-full font-medium hover:bg-[#A74B5D] hover:text-white transition flex items-center justify-center w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A74B5D] focus-visible:ring-offset-2"
            >
              Let's talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative max-w-[400px] sm:max-w-[480px] w-full">
          <div className="relative bg-[#FBDADA] rounded-[2rem] rounded-tl-[15rem] rounded-br-[15rem] p-4 shadow-lg w-full">
            <Image
              src="/images/g.png"
              alt="Portrait of Savia Yarba, Graphic Designer & Frontend Developer"
              width={380}
              height={480}
              className="rounded-[2rem] mr-0 sm:mr-10 object-cover w-full h-auto"
              priority
            />
            {/* Decorative dots */}
            <div className="absolute top-20 left-4 w-12 h-12 bg-[#2a825b] rounded-full pointer-events-none"></div>
            <div className="absolute top-4 left-4 w-12 h-12 bg-[#A74B5D] rounded-full pointer-events-none"></div>

            <div className="absolute bottom-20 right-4 w-12 h-12 bg-[#4B2E2E] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#FBDADA] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
