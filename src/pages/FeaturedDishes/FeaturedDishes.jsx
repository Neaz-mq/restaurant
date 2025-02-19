import { motion } from "framer-motion";
import { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Grilled Salmon",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739955851/salmon_n2e9zs.jpg",
    price: "$18.99",
  },
  {
    id: 2,
    name: "Classic Burger",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739955974/burger_nipyj6.jpg",
    price: "$12.99",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739956092/pasta_og1h7q.jpg",
    price: "$14.99",
  },
  {
    id: 4,
    name: "Sushi Platter",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739956155/shushi_bvnbax.jpg",
    price: "$22.99",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.2, type: "spring", stiffness: 100 },
  }),
};

const FeaturedDishes = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Featured Dishes 🍽️
        </motion.h2>

        {/* Dishes Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(dish.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 
                ${hovered === dish.id ? "scale-105 shadow-yellow-500/50" : "hover:scale-105 hover:shadow-xl"}`}
            >
              <motion.img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="text-yellow-400 text-lg font-bold mt-2">
                  {dish.price}
                </p>
              </div>
              {/* Floating Glow Effect */}
              {hovered === dish.id && (
                <motion.div
                  className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
