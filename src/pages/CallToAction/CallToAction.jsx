import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24  text-white text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 flex flex-col items-center justify-center"
      >
        {/* Lottie animation directly from the URL */}
        <div className="-mt-10 mb-2">
          <iframe
            src="https://lottie.host/embed/d879a2c5-2d21-45e9-981c-b3350e582372/XP4CWcfP7T.lottie"
            frameBorder="0"
            style={{ width: '250px', height: '250px' }}
            allow="autoplay"
            title="Lottie Animation"
          ></iframe>
        </div>


        {/* Content (Text and Button) */}
        <motion.div className="text-center">
          <motion.h2
            className="text-5xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Craving Something Delicious? 🍽️
          </motion.h2>
          <p className="text-lg mb-10">
            Dive into the world of flavor! Our expert chefs create mouthwatering dishes from scratch, using only the finest ingredients.
          </p>

          {/* Call-to-action button */}
          <Link
            to="/reservation"
            className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-xl transition ease-in-out duration-300 transform hover:scale-110 hover:bg-yellow-500"
          >
            Reserve Your Spot Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
