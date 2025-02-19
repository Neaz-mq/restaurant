import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-black bg-opacity-80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault(); // Prevent React Router from handling navigation
              window.location.href = "/"; // Force full reload
            }}
            className="text-2xl font-bold tracking-wide text-neutral-50"
          >
            🍽️ TrendyBites
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden lg:flex space-x-8 text-lg text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 },
            },
          }}
        >
          {["Home", "Menu", "About", "Gallery", "Reservations", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition"
                onClick={(e) => {
                  if (item === "Home") {
                    e.preventDefault();
                    window.location.href = "/";
                  }
                }}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button (Desktop) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden lg:block"
        >
          <Link
            to="/reservations"
            className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition"
          >
            Book a Table
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-neutral-50">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 py-6 text-lg md:w-[100%] lg:hidden"
          >
            {["Home", "Menu", "About", "Gallery", "Reservations", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition text-neutral-50"
                onClick={(e) => {
                  if (item === "Home") {
                    e.preventDefault();
                    window.location.href = "/";
                  } else {
                    setIsOpen(false); // Close menu on click, no page redirect for other items
                  }
                }}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition"
              onClick={() => setIsOpen(false)} // Close menu on click, no page redirect
            >
              Book a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
