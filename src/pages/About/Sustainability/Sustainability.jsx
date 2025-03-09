import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaSeedling } from "react-icons/fa";

const sustainabilitySteps = [
    { icon: <FaLeaf className="text-green-600 text-4xl" />, title: "Locally Sourced Ingredients", description: "We partner with local farmers to ensure fresh and organic produce." },
    { icon: <FaRecycle className="text-green-600 text-4xl" />, title: "Zero Waste Initiative", description: "Our kitchen operates with a zero-waste mindset, recycling and composting whenever possible." },
    { icon: <FaSeedling className="text-green-600 text-4xl" />, title: "Eco-Friendly Packaging", description: "We use biodegradable and recyclable materials for all our packaging." },
];

const Sustainability = () => {
    return (
        <section className="relative bg-black py-24 px-4 overflow-hidden">
            {/* Neon Blobs */}
            <div className="absolute -top-20 -left-40 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

            <div className="text-center max-w-4xl mx-auto relative z-10">
                <motion.h1
                    className="text-4xl font-bold text-white mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Sustainability Commitment
                </motion.h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {sustainabilitySteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-black/80 rounded-xl shadow-lg p-8 space-y-4 transform transition duration-500 hover:scale-105 relative"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Neon Border Glow */}
                            <div className="absolute inset-0 bg-gray-600 rounded-xl opacity-20 blur-md"></div>

                            <div className="relative z-10 text-white">
                                <div className="mb-4 flex justify-center">{step.icon}</div>
                                <h2 className="text-xl font-semibold">{step.title}</h2>
                                <p className="text-gray-300 mt-2">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sustainability;