import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dzi3u164c/image/upload/v1739954304/banner_vsc26k.jpg')" }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.3 },
          },
        }}
      >
        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Welcome to <span className="text-yellow-400">TrendyBites</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          className="mt-4 text-lg md:text-2xl max-w-2xl"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Experience the finest flavors and a cozy atmosphere like never before.
        </motion.p>

        {/* CTA Button with Animation */}
       <Link to={"/menu"}> <motion.button 
          className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-xl hover:bg-yellow-500 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Explore Menu
        </motion.button></Link>
      </motion.div>
    </div>
  );
};

export default Banner;
