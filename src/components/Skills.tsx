'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-[#E34F26]" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, label: "CSS3" },
    { icon: <FaJsSquare className="text-[#F7DF1E]" />, label: "JavaScript" },
    { icon: <SiTypescript className="text-[#3178C6]" />, label: "TypeScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, label: "React.js" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, label: "Tailwind CSS" },
    { icon: <SiNextdotjs className="text-[#999999]" />, label: "Next.js" },
    { icon: <FaFigma className="text-[#A259FF]" />, label: "Figma" },
    { icon: <DiPhotoshop className="text-[#31A8FF]" />, label: "Photoshop" },
  ];

  return (
    <section id="skills" className="bg-white py-24 px-6 text-[#4B2E2E]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left SVG Updated */}
        <div className="flex justify-center">
          <svg
            role="img"
            aria-label="Decorative skills pie chart"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            className="max-w-full h-auto"
          >
            {/* خلفية الدائرة الكبيرة */}
            <circle cx="200" cy="200" r="160" fill="#FBDADA" />

            {/* تقسيم الدائرة إلى 6 أجزاء متساوية */}
            {[...Array(6)].map((_, i) => {
              const angle1 = (i * 60) * (Math.PI / 180);
              const angle2 = ((i + 1) * 60) * (Math.PI / 180);

              const x1 = 200 + 160 * Math.cos(angle1);
              const y1 = 200 + 160 * Math.sin(angle1);
              const x2 = 200 + 160 * Math.cos(angle2);
              const y2 = 200 + 160 * Math.sin(angle2);

              // الألوان: نضيف الأخضر #2a825b فقط في القطعتين 1 و4
              const colors = [
                "#A74B5D",
                "#2a825b",  // الأخضر هنا
                "#E87E7E",
                "#2a825b",  // والأخضر هنا أيضاً
                "#C0575F",
                "#D96B6B"
              ];

              return (
                <path
                  key={i}
                  d={`M200 200 L${x1.toFixed(2)} ${y1.toFixed(2)} A160 160 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`}
                  fill={colors[i]}
                  opacity="0.85"
                  stroke="#8A3A46"
                  strokeWidth="1"
                />
              );
            })}

            {/* الدائرة المركزية */}
            <circle cx="200" cy="200" r="30" fill="#A74B5D" stroke="#7A3540" strokeWidth="2" />
          </svg>
        </div>

        {/* Right Skills Grid */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-serif font-semibold text-[#A74B5D] mb-12">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center md:justify-start">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
