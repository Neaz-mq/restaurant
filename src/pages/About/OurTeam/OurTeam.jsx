import { motion } from "framer-motion";

const teamMembers = [
    { name: "John Doe", role: "Head Chef", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741491601/chef1_vre92m.jpg" },
    { name: "Jane Smith", role: "Sous Chef", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741491701/chef2_jehypu.jpg" },
    { name: "Emily Johnson", role: "Pastry Chef", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741491792/chef3_bcbvbj.jpg" },
];

const OurTeam = () => {
    return (
        <div className="py-24 bg-black text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Meet Our Team</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl p-6 w-64 hover:shadow-xl transition bg-white/10 backdrop-blur-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h2 className="text-xl font-semibold text-white">{member.name}</h2>
                        <p className="text-white">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
