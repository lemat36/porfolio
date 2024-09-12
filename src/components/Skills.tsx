import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"; // Tailwind and Next.js icons
import { DiPhotoshop, DiIllustrator } from "react-icons/di"; // Photoshop and Illustrator icons

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-purple-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Left Section: Visual Elements */}
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-40 h-40 sm:w-60 sm:h-60"
          >
            {/* Outer diamond */}
            <polygon points="100,10 130,60 100,110 70,60" fill="#F5A623" />

            {/* Inner diamond */}
            <polygon
              points="100,50 120,80 100,110 80,80"
              fill="none"
              stroke="green" /* Changed to green */
              strokeWidth="3"
            />

            {/* Triangles around */}
            <polygon
              points="60,40 70,60 50,60"
              fill="none"
              stroke="green" /* Changed to green */
              strokeWidth="3"
            />
            <polygon
              points="140,40 150,60 130,60"
              fill="none"
              stroke="green" /* Changed to green */
              strokeWidth="3"
            />
            <polygon
              points="100,140 120,160 80,160"
              fill="none"
              stroke="green" /* Changed to green */
              strokeWidth="3"
            />

            {/* Circular Elements */}
            <circle cx="50" cy="90" r="5" fill="#F5A623" />
            <circle cx="150" cy="90" r="5" fill="#F5A623" />
            <circle cx="100" cy="160" r="5" fill="#F5A623" />

            {/* Additional decorative elements */}
            <rect
              x="85"
              y="85"
              width="30"
              height="30"
              fill="none"
              stroke="green" /* Changed to green */
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Right Section: Skills */}
        <div className="text-center mt-8 sm:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-yellow-500">
            My Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-3xl text-red-600 mb-4" />
              <p className="font-semibold text-lg">HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-3xl text-blue-600 mb-4" />
              <p className="font-semibold text-lg">CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <FaJsSquare className="text-3xl text-yellow-400 mb-4" />
              <p className="font-semibold text-lg">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-3xl text-blue-500 mb-4" />
              <p className="font-semibold text-lg">React.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-3xl text-teal-400 mb-4" />
              <p className="font-semibold text-lg">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-3xl text-gray-400 mb-4" />
              <p className="font-semibold text-lg">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <DiPhotoshop className="text-3xl text-blue-500 mb-4" />
              <p className="font-semibold text-lg">Photoshop</p>
            </div>
            <div className="flex flex-col items-center">
              <DiIllustrator className="text-3xl text-orange-500 mb-4" />
              <p className="font-semibold text-lg">Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
