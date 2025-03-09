import { motion } from "framer-motion";

// Dish data
const dishes = [
  {
    id: 1,
    name: "Avocado Toast",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741499851/Avocado_Toast_gzsxuk.jpg",
    price: "$18.99",
  },
  {
    id: 2,
    name: "Poké Bowl",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741499952/Pok%C3%A9_Bowl_j5ajyt.jpg",
    price: "$14.99",
  },
  {
    id: 3,
    name: "Vegan Burger",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741500010/Vegan_Burger_ztey7a.jpg",
    price: "$16.99",
  },
  {
    id: 4,
    name: "Grilled Salmon",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741500153/Grilled_Salmon_t0p4ez.jpg",
    price: "$19.99",
  },
  {
    id: 5,
    name: "Classic Burger",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741500216/Classic_Burger_o4qzpu.jpg",
    price: "$13.99",
  },
  {
    id: 6,
    name: "Pasta Alfredo",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1741500394/Pasta_Alfredo_ntlomt.jpg",
    price: "$17.99",
  },
];

// Motion Variants for animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.1, type: "spring", stiffness: 120 },
  }),
};

const FeaturedDishes = () => {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-16 tracking-wide text-yellow-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Dishes 🍽️
        </motion.h2>

        {/* Grid of dishes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              custom={index}
              variants={cardVariants}
              className="relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 w-full h-[350px] md:h-[400px]"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110"
                loading="lazy"
              />
              {/* Content inside the card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-20 bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-xl font-semibold text-white mb-2">{dish.name}</h3>
                <p className="text-lg text-yellow-400 font-bold">{dish.price}</p>
              </div>

              {/* Gradient overlay effect */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
