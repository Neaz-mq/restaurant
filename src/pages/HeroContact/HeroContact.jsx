import { motion } from "framer-motion";

const HeroContact = () => {
    return (
        <section 
            className="relative flex items-center justify-center min-h-[60vh] bg-cover bg-center" 
            style={{ backgroundImage: "url('https://res.cloudinary.com/dzi3u164c/image/upload/v1741511378/contatctus_kxfxar.jpg')" }} // Replace with actual image
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                className="relative text-center text-white px-6 py-12 max-w-3xl mx-auto"
            >
                <h1 className="text-6xl font-bold tracking-wide text-white drop-shadow-lg">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-300 mt-4 italic">
                    "We're here to assist you. Reach out for any inquiries or visit us for a delightful experience."
                </p>
            </motion.div>
        </section>
    );
};

export default HeroContact;
