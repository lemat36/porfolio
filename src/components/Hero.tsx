import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between items-center py-16 bg-purple-900 h-screen text-white px-10">
      {/* Left side: Text */}
      <div className="text-center sm:text-left sm:w-1/2 mt-10 sm:mt-0">
        <h1 className="text-4xl mb-2 font-bold">Hello, My name is</h1>
        <h2 className="text-4xl  font-extrabold text-yellow-500">
          Savia Yarba
        </h2>
        <p className="text-lg font-semibold mt-4">
          I'm a Graphic designer & Frontend developer.
        </p>
        <div className="mt-6 flex justify-center sm:justify-start">
          {/* Download CV button */}
          <a
            href="/mon cv.pdf"
            download="Savia_Yarba_CV.pdf"
            className="bg-yellow-500 text-black px-6 py-3 rounded mr-4 font-semibold"
          >
            Download CV
          </a>

          {/* Let's talk button */}
          <a
            href="mailto:savia.yarba@gmail.com?subject=Let's%20Talk"
            className="bg-white text-black px-6 py-3 rounded flex items-center font-semibold"
          >
            Let's talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="flex justify-center sm:justify-end sm:w-1/2">
        <Image
          src="/images/g.png"
          alt="savia"
          width={400}
          height={300}
          className="w-[250px] sm:w-[400px]"
        />
      </div>
    </section>
  );
}
