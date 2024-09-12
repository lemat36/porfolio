import Image from "next/image";
import Link from "next/link";

interface WorkItemProps {
  title: string;
  imageSrc: string;
  href?: string; // Optional, since some items don't have links
}

const workItems: WorkItemProps[] = [
  {
    title: "travengo",
    imageSrc: "/images/logo-retina.png",
    href: "https://travengo.vercel.app/",
  },
  {
    title: "paul mauritanie",
    imageSrc: "/images/Logo_Paul.png",
    href: "https://paul-website-ibtikar-techologies.vercel.app/",
  },
  {
    title: "settar",
    imageSrc: "/images/logo.svg",
    href: "https://settar.vercel.app/",
  },
  {
    title: "nyture",
    imageSrc: "/images/nyture-wordpress-theme-qi99q-m.jpg",
    href: "https://nyture.vercel.app/",
  },
  {
    title: "template",
    imageSrc: "/images/434x0w (1).webp",
    href: "https://template-jade-gamma.vercel.app/",
  },
  {
    title: "company",
    imageSrc: "/images/company-icon--desktop-business-icons--softiconsm-23.png",
    href: "https://company-delta-seven.vercel.app/",
  },
  {
    title: "home",
    imageSrc: "/images/home.png",
    href: "https://home-virid-six.vercel.app/",
  },
  { title: "Cut", imageSrc: "/images/cut.png" },
];

const WorkGrid: React.FC = () => {
  return (
    <section id="mywork" className="py-12 bg-purple-900">
      <h2 className="text-center text-yellow-400 text-4xl font-bold mb-8">
        My Work
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {workItems.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link
              href={item.href ?? "#"}
              passHref
              target={item.href ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <div className="relative w-full h-40">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-center text-purple-900 font-semibold">
                  {item.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGrid;
