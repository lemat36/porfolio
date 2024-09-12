import {
  FaCode,
  FaPaintBrush,
  FaPuzzlePiece,
  FaTools,
  FaBullhorn,
} from "react-icons/fa";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-purple-900 h-screen text-white py-16 px-6 flex justify-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold mb-20 text-green-600 text-center">
          My Services
        </h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaPaintBrush className="text-5xl mb-4 text-yellow-500" />,
              title: "Creative Graphic Design",
              description:
                "Creating stunning visual designs for web and print.",
            },
            {
              icon: <FaCode className="text-5xl mb-4 text-yellow-500" />,
              title: "Frontend Development",
              description:
                "Interactive websites with modern frontend technologies.",
            },
            {
              icon: <FaBullhorn className="text-5xl mb-4 text-yellow-500" />,
              title: "Social Media Management",
              description:
                "Managing and growing your brand's presence on social media.",
            },
            // Uncomment these when needed
            // {
            //   icon: <FaPuzzlePiece className="text-5xl mb-4 text-yellow-500" />,
            //   title: "UX Design",
            //   description: "Designing user-centered experiences that delight.",
            // },
            // {
            //   icon: <FaTools className="text-5xl mb-4 text-yellow-500" />,
            //   title: "Maintenance & Support",
            //   description:
            //     "Ongoing support to ensure everything runs smoothly.",
            // },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-purple-700 p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
