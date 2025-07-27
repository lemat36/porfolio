'use client';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaBehance,
  FaGithub,
} from 'react-icons/fa';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <section id="contactme" className="bg-white py-24 text-[#4B2E2E]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#A74B5D] mb-12">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-16">
          <a
            href="mailto:saviayarba@gmail.com"
            className="flex items-center gap-4 text-lg hover:text-[#A74B5D] transition-colors"
          >
            <FaEnvelope className="text-[#A74B5D] text-2xl" />
            saviayarba@gmail.com
          </a>
          <div className="flex items-center gap-4 text-lg">
            <FaMapMarkerAlt className="text-[#A74B5D] text-2xl" />
            Mauritanie - Nouakchott
          </div>
          <a
            href="tel:+22236020806"
            className="flex items-center gap-4 text-lg hover:text-[#A74B5D] transition-colors"
          >
            <FaPhoneAlt className="text-[#A74B5D] text-2xl" />
            +222 36 02 08 06
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-10">
          <Link
            href="https://www.linkedin.com/in/godisgreatgod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A74B5D] transition-colors"
          >
            <FaLinkedin className="text-3xl" />
          </Link>
          <Link
            href="https://www.behance.net/godisgreatgod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A74B5D] transition-colors"
          >
            <FaBehance className="text-3xl" />
          </Link>
          <Link
            href="https://github.com/lemat36"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A74B5D] transition-colors"
          >
            <FaGithub className="text-3xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
