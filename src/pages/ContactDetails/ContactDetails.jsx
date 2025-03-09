import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
    { icon: <MapPin size={28} className="text-yellow-400" />, title: "Address", details: "Jaleshoritola, Bogura, Bogura Sadar, 5800" },
    { icon: <Phone size={28} className="text-yellow-400" />, title: "Phone", details: "+880130-3660481" },
    { icon: <Mail size={28} className="text-yellow-400" />, title: "Email", details: "neazmorshed.cse@gmail.com" },
];

const ContactDetails = () => {
    return (
        <section className="bg-gray-900 text-white py-20 px-6">
            {/* Title */}
            <motion.div 
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }} 
                className="text-center mb-12"
            >
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Contact Information
                </h2>
                <p className="text-lg text-gray-300 mt-4">
                    Reach out to us for reservations, inquiries, or assistance.
                </p>
            </motion.div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {contactInfo.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: index * 0.2 }} 
                        className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4 transform hover:scale-105 transition-all duration-300"
                    >
                        <div className="p-4 bg-gray-700 rounded-full">{item.icon}</div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-300">{item.details}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ContactDetails;
