import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaBehance,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

const ContactMe = () => {
  return (
    <section id="contactme" className="bg-purple-950 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Contact Me Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-8">
          Contact Me
        </h2>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-16 space-y-6 sm:space-y-0 mb-12">
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-3xl text-yellow-500" />
            <p>saviayarba@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaMapMarkerAlt className="text-3xl text-yellow-500" />
            <p>Mauritanie - Nouakchott</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaPhoneAlt className="text-3xl text-yellow-500" />
            <p>+222 36 02 08 06</p>
          </div>
        </div>

        {/* Social Icons with Next.js Link */}
        <div className="flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <p>
              <Link
                href="https://www.behance.net/godisgreatgod"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FaLinkedin className="text-3xl sm:text-4xl" />
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p>
              <Link
                href="https://www.behance.net/godisgreatgod"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {" "}
                <FaBehance className="text-3xl sm:text-4xl" />
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p>
              <Link
                href="https://github.com/lemat36"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FaGithub className="text-3xl sm:text-4xl" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
