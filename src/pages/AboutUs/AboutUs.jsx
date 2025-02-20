import { motion } from 'framer-motion'; 

const Button = ({ children, className, ...props }) => (
    <motion.button
        className={`relative px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full 
        shadow-md hover:shadow-yellow-500/50 transition-transform transform hover:-translate-y-1 ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        {...props}
    >
        {children}
        {/* Neon Glow Effect */}
        <span className="absolute inset-0 rounded-full blur-lg opacity-50 bg-yellow-500"></span>
    </motion.button>
);

const Card = ({ children, className }) => (
    <motion.div 
        className={`relative p-8 bg-gray-800/70 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-700 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {/* Subtle Neon Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl opacity-10 blur-md"></div>
        <div className="relative z-10">
            {children}
        </div>
    </motion.div>
);

const AboutUs = () => {
    return (
        <section className="relative bg-black py-20 overflow-hidden">
            {/* Neon Blobs */}
            <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6 relative z-10">
                
                <motion.div 
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Card>
                        <h2 className="text-5xl font-extrabold mb-6 text-white">
                            About Us
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            At <span className="text-yellow-500 font-semibold">TrendyBites</span>, we’re passionate about serving exquisite dishes with fresh ingredients and a welcoming ambiance.
                            Our story is all about bringing joy through culinary experiences. Join us and be part of our flavorful journey!
                        </p>
                        <Button>
                            Learn More
                        </Button>
                    </Card>
                </motion.div>

                <motion.div 
                    className="flex-1 flex justify-center items-center mb-8 md:mb-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="w-80 h-80">
                        <iframe
                            src="https://lottie.host/embed/90739c48-2295-4426-a2f8-2769e71ed2ae/Hn6T1oLJmG.lottie"
                            frameBorder="0"
                            style={{ width: '100%', height: '100%' }}
                            allow="autoplay"
                            title="About Us Animation"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;