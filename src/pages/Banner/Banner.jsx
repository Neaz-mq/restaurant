import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const bannerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.3, staggerChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Scale Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img
          src="https://res.cloudinary.com/dzi3u164c/image/upload/v1739954304/banner_vsc26k.jpg"
          alt="Restaurant Banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center text-white px-4"
        variants={bannerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Heading */}
        <motion.h1 className="text-5xl md:text-7xl font-bold" variants={textVariants}>
          Welcome to <span className="text-yellow-400">TrendyBites</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p className="mt-4 text-lg md:text-2xl max-w-2xl" variants={textVariants}>
          Experience the finest flavors and a cozy atmosphere like never before.
        </motion.p>

        {/* CTA Button */}
        <Link to="/menu">
          <motion.button
            className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-xl hover:bg-yellow-500 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={textVariants}
          >
            Explore Menu
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Banner;
