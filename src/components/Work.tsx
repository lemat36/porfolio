'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WorkItemProps {
  title: string;
  imageSrc: string;
  href?: string;
}

const workItems: WorkItemProps[] = [
  {
    title: 'Travengo',
    imageSrc: '/images/logo-retina.png',
    href: 'https://travengo.vercel.app/',
  },
  {
    title: 'Paul Mauritanie',
    imageSrc: '/images/Logo_Paul.png',
    href: 'https://paul-website-ibtikar-techologies.vercel.app/',
  },
  {
    title: 'Settar',
    imageSrc: '/images/logo.svg',
    href: 'https://settar.vercel.app/',
  },
  {
    title: 'Nyture',
    imageSrc: '/images/nyture-wordpress-theme-qi99q-m.jpg',
    href: 'https://nyture.vercel.app/',
  },
  {
    title: 'Template',
    imageSrc: '/images/434x0w (1).webp',
    href: 'https://template-jade-gamma.vercel.app/',
  },
  {
    title: 'Company',
    imageSrc: '/images/company-icon--desktop-business-icons--softiconsm-23.png',
    href: 'https://company-delta-seven.vercel.app/',
  },
  {
    title: 'Home',
    imageSrc: '/images/home.png',
    href: 'https://home-virid-six.vercel.app/',
  },
  {
    title: 'Cut',
    imageSrc: '/images/cut.png',
  },
];

const WorkGrid = () => {
  return (
    <section
      id="work"
      className="bg-[#FFF5F1] py-24 px-6 text-[#4B2E2E] rounded-b-[15%]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-serif font-semibold text-[#A74B5D] mb-16">
          My Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {workItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/40 backdrop-blur-md border border-[#E4C1C1] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:scale-[1.02]"
            >
              <Link
                href={item.href ?? '#'}
                target={item.href ? '_blank' : '_self'}
                rel={item.href ? 'noopener noreferrer' : undefined}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-[#4B2E2E] group-hover:text-[#A74B5D] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
