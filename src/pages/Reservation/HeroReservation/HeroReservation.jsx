import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroReservation = () => {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center" 
            style={{ backgroundImage: "url('https://res.cloudinary.com/dzi3u164c/image/upload/v1741586958/reserve_q0o2ur.jpg')" }}>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            
            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center text-white px-6"
            >
                <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-wide drop-shadow-lg">Reserve Your Table</h1>
                <p className="text-lg md:text-2xl mb-8 opacity-90 max-w-xl mx-auto">Indulge in an unforgettable dining experience with exquisite flavors and an elegant ambiance.</p>
                
                {/* Animated CTA */}
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block px-6 py-2 text-lg font-bold text-yellow-400 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 shadow-lg"
                >
                    <Link to="/menu">Explore Menu</Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroReservation;
