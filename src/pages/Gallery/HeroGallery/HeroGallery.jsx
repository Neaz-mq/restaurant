import { motion } from "framer-motion";

const HeroGallery = () => {
    return (
        <section className="relative w-full h-[75vh] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzi3u164c/image/upload/v1741498797/gallery_goj3jv.jpg')] bg-cover bg-center brightness-50"></div>
            
            {/* Neon Glow Effect */}
            <div className="absolute -bottom-10 left-10 w-40 h-40 bg-yellow-400 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute top-10 right-10 w-40 h-40 bg-red-400 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
            
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl font-extrabold uppercase tracking-widest drop-shadow-lg">
                    Our Gallery
                </h1>
            </motion.div>
        </section>
    );
};

export default HeroGallery;