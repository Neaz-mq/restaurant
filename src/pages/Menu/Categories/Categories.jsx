import { motion } from "framer-motion";

const categories = [
  { name: "Appetizers & Starters", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740051406/appatizwer_y0entv.jpg", emoji: "🍤" },
  { name: "Salads & Soups", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740051553/salad_udouwv.jpg", emoji: "🥗" },
  { name: "Main Courses", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740051773/main_iamfty.jpg", emoji: "🍛" },
  { name: "Pizzas, Burgers & Sandwiches", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740051917/pizzaburger_z2dmxk.jpg", emoji: "🍔" },
  { name: "Pasta & Rice Dishes", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740052093/pastarice_qgfqwe.jpg", emoji: "🍝" },
  { name: "Grilled & Specialties", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740052214/grilled_qqbera.jpg", emoji: "🥩" },
  { name: "Desserts", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740052316/dessert_irccge.jpg", emoji: "🍰" },
  { name: "Beverages", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740052398/beverage_dgwn6m.jpg", emoji: "🍹" },
  { name: "Kids’ Menu", image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740052547/kids_xswfnl.jpg", emoji: "👶" },
];

const Categories = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">🍽️ Explore Our Menu Categories 🍹</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md bg-gray-800 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-5xl">{category.emoji}</span>
            </div>
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold mt-3 group-hover:text-yellow-500 transition-colors duration-300">
                {category.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
