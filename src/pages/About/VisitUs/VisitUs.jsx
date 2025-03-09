import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

const VisitUs = () => {
    return (
        <section className="relative py-20 px-4 text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            
            <div className="text-center max-w-4xl mx-auto relative z-10">
                <motion.h2
                    className="text-4xl font-extrabold mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Visit Us
                </motion.h2>
                
                <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 space-y-6 transform transition duration-500 hover:scale-105 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-yellow-300 text-3xl" />
                            <p className="text-lg text-center">Jaleshorritola, Bogura, Bogura Sadar, 5800</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaClock className="text-green-300 text-3xl" />
                            <p className="text-lg text-center">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-blue-300 text-3xl" />
                            <p className="text-lg text-center">+880130-3660481</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisitUs;