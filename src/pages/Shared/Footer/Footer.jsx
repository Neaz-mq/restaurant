import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleLogoClick = (e) => {
        e.preventDefault(); // Prevent React Router from handling navigation
        window.location.href = "/"; // Force full reload to Home page
    };

    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-6 text-center">

                {/* Grid Layout - Centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

                    {/* Logo & Tagline */}
                    <div>
                        <motion.h2
                            className="text-3xl font-extrabold tracking-wide text-yellow-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            onClick={handleLogoClick} // Add onClick to trigger page reload
                            style={{ cursor: "pointer" }} // Make the logo clickable
                        >
                            TrendyBites 🍽️
                        </motion.h2>
                        <p className="text-gray-400 mt-3">
                            Where flavors meet passion! Your ultimate dining destination.
                        </p>
                    </div>

                    {/* Quick Links */}

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            {["Home", "Menu", "About", "Gallery", "Reservations", "Contact"].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 10, color: "#facc15" }} // Smooth hover effect
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Add conditional reload for Home link */}
                                    <Link
                                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="hover:text-yellow-400 transition"
                                        onClick={(e) => {
                                            if (item === "Home") {
                                                e.preventDefault(); // Prevent React Router from handling navigation
                                                window.location.href = "/"; // Force full reload to Home page
                                            }
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>


                    {/* Special Hours & Chef's Pick */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Today’s Specials</h3>

                        {/* Special Hours */}
                        <motion.p
                            className="text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-yellow-400 font-bold">Happy Hours:</span> 4PM - 7PM 🍹
                        </motion.p>

                        {/* Chef’s Pick of the Day */}
                        <motion.p
                            className="mt-3 text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="text-yellow-400 font-bold">Chef’s Pick:</span> Pasta Alfredo 🍝
                        </motion.p>
                    </div>

                </div>

                {/* Copyright & Small Details */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} TrendyBites. All rights reserved.</p>
                    <p className="mt-2">Crafted with ❤️ for food lovers.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
