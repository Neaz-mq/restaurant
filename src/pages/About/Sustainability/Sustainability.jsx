import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaSeedling } from "react-icons/fa";

const sustainabilitySteps = [
    { icon: <FaLeaf className="text-green-600 text-4xl" />, title: "Locally Sourced Ingredients", description: "We partner with local farmers to ensure fresh and organic produce." },
    { icon: <FaRecycle className="text-green-600 text-4xl" />, title: "Zero Waste Initiative", description: "Our kitchen operates with a zero-waste mindset, recycling and composting whenever possible." },
    { icon: <FaSeedling className="text-green-600 text-4xl" />, title: "Eco-Friendly Packaging", description: "We use biodegradable and recyclable materials for all our packaging." },
];

const Sustainability = () => {
    return (
        <div className="py-12 bg-green-50 text-center">
            <motion.h1
                className="text-4xl font-bold text-green-800 mb-8"
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
                        className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:shadow-xl transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="mb-4">{step.icon}</div>
                        <h2 className="text-xl font-semibold text-green-900">{step.title}</h2>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Sustainability;