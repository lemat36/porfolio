'use client';

import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaPaintBrush className="text-5xl text-[#A74B5D] mb-4" />,
      title: 'Creative Graphic Design',
      description:
        'Crafting elegant visual experiences that bring your brand to life.',
    },
    {
      icon: <FaCode className="text-5xl text-[#A74B5D] mb-4" />,
      title: 'Frontend Development',
      description:
        'Building modern, responsive websites with clean UI and performance.',
    },
    {
      icon: <FaBullhorn className="text-5xl text-[#A74B5D] mb-4" />,
      title: 'Social Media Management',
      description:
        'Strategic content creation to grow your brand’s online presence.',
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#FFF5F1] text-[#4B2E2E] py-24 px-6 rounded-b-[15%]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#A74B5D] mb-16">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFECE8] rounded-3xl shadow-xl px-8 py-12 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-bold mt-4 mb-3">{service.title}</h3>
              <p className="text-[#6F4E4E] leading-7 text-base max-w-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
