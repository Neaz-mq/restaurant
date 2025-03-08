import { motion } from "framer-motion";

const specialsData = [
  {
    name: "Summer Berry Salad",
    description: "Fresh greens with a mix of seasonal berries, goat cheese, and a balsamic glaze.",
    price: "$12.99",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740286240/berry_pnbja7.jpg",
    label: "New",
  },
  {
    name: "Truffle Pasta",
    description: "Creamy truffle sauce with handmade pasta and shaved parmesan.",
    price: "$18.99",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740286304/tuffle_lrgbei.jpg",
    label: "Popular",
  },
  {
    name: "Mango Sorbet",
    description: "Refreshing mango sorbet with mint garnish, perfect for a summer treat.",
    price: "$6.99",
    image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1740286456/mango_dd4lxe.jpg",
    label: "Limited Edition",
  },
];

const Specials = () => {
  return (
    <div className="py-20 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">🔥 Chef's Specials 🔥</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3, delay: index * 0.08, ease: "easeOut" }}
            className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-2">{item.label}</span>
                <h2 className="text-xl font-semibold">{item.name}</h2>
              </div>
              <p className="text-sm text-white mb-3">{item.description}</p>
              <span className="text-lg font-bold">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
