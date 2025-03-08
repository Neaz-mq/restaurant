import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-[url('https://res.cloudinary.com/dzi3u164c/image/upload/v1740046360/menu_h0igv4.jpg')]">
      <div className="absolute inset-0 bg-black/70 z-10" />

      <motion.div
        className="relative z-20 text-center text-white p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          🍽️ Discover Our Delicious Menu 🍕
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-6">
          From appetizers to desserts, indulge in our wide selection of
          mouthwatering dishes made with love.
        </p>
        <motion.button
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition-transform"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          Explore Menu
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;
