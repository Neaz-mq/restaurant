import { motion } from "framer-motion";

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
    transition: { delay: index * 0.15, type: "spring", stiffness: 100 },
  }),
};

const FeaturedDishes = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Featured Dishes 🍽️
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
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
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gray-800 rounded-2xl overflow-hidden drop-shadow-lg transition-all duration-300"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center relative z-10">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="text-yellow-400 text-lg font-bold mt-2">
                  {dish.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
