import { FaBookOpen, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-800 text-white py-12 mt-16 shadow-lg">

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xl font-bold">
              <FaBookOpen className="text-white text-2xl" />
              <span>Minimal Library</span>
            </div>
            <p className="text-white/80 text-sm">
              Simplifying library management for modern institutions.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm grid">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  to="/create-book"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Add Book
                </Link>
              </li>
              <li>
                <Link
                  to="/borrow-summary"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Borrow Summary
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="gap-4 text-sm grid">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <MdEmail className="text-lg" />
                <span>contact@minlib.example</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MdPhone className="text-lg" />
                <span>+8801727272727</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MdLocationOn className="text-lg" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-600 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Minimal Library Management. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
