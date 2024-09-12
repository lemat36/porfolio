export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 bg-purple-950 min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-10 text-white px-5 sm:px-10"
    >
      {/* Left Column: Text Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-600">
          About Me
        </h2>
        <p className="text-base sm:text-lg mt-10 sm:mt-28 pr-0 sm:pr-24 leading-8 sm:leading-10">
          Passionate about graphic design and frontend development. I combine
          creativity, artistry, and technical skills to create impactful visual
          experiences. With a background in graphic design and a specialization
          in web development.
        </p>
      </div>

      {/* Right Column: Visual Section */}
      <div className="mt-36  flex justify-center sm:justify-between space-x-8 sm:space-x-10">
        {/* First Column */}
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-green-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"></div>{" "}
          {/* Top Circle */}
          <div className="bg-yellow-500 w-8 h-32 sm:w-10 sm:h-40 rounded-md shadow-lg"></div>{" "}
          {/* Vertical Rectangle */}
          <div className="bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"></div>{" "}
          {/* Bottom Circle */}
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"></div>{" "}
          {/* Top White Circle */}
          <div className="border-4 border-white w-8 h-32 sm:w-10 sm:h-40 rounded-md shadow-lg"></div>{" "}
          {/* Outlined Rectangle */}
          <div className="bg-green-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"></div>{" "}
          {/* Bottom Circle */}
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-green-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"></div>{" "}
          {/* Top Circle */}
          <div className="bg-yellow-500 w-8 h-32 sm:w-10 sm:h-40 rounded-md shadow-lg"></div>{" "}
          {/* Vertical Rectangle */}
          <div className="bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"></div>{" "}
          {/* Bottom Circle */}
        </div>
      </div>
    </section>
  );
}
