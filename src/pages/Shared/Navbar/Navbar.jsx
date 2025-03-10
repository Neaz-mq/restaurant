import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_ITEMS = ["Home", "Menu", "About", "Gallery", "Contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

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
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={index}
              variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
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
            to="/reservation"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 py-6 text-lg md:w-[100%] lg:hidden"
          >
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition text-neutral-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition"
              onClick={() => setIsOpen(false)}
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
