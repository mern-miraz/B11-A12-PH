import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Column 1: Logo and slogan */}
        <div className="md:w-1/3">
          <h1 className="text-2xl font-bold mb-2">Course Management System</h1>
          <p className="text-gray-400">
            Your partner in modern learning and course delivery.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Course Management System. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
