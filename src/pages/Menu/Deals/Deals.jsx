import { motion } from 'framer-motion';

const dealsData = [
  {
    name: 'Family Meal',
    description: 'A complete meal with appetizers, main course, and dessert for the whole family.',
    price: '$49.99',
    image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1740289450/family_omdaef.jpg',
    label: 'Combo',
  },
  {
    name: 'Lunch Special',
    description: 'Choose any main dish with a complimentary drink, available from 12-3 PM.',
    price: '$15.99',
    image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1740289550/lunch_ggdesf.jpg',
    label: 'Special',
  },
  {
    name: 'Happy Hour Deals',
    description: 'Discounted drinks and appetizers from 4-6 PM every weekday.',
    price: 'Up to 50% Off',
    image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1740289650/hour_oj2k12.jpg',
    label: 'Limited Time',
  },
  {
    name: 'Weekend Feast',
    description: 'Enjoy a lavish meal with friends and family during the weekend.',
    price: '$69.99',
    image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1740289716/feast_reinbw.jpg',
    label: 'Weekend Special',
  },
];

const Deals = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Neon Blobs for Background Animation */}
      <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

      <h1 className="text-3xl font-bold mb-10 text-center z-10 relative">🥂 Combos & Meal Deals 🥂</h1>
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {dealsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.1, type: 'spring', stiffness: 100 }}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-80 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div className="mb-2">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-2">{item.label}</span>
                <h2 className="text-xl font-semibold text-white mt-3">{item.name}</h2>
              </div>
              <p className="text-sm text-white mb-4 flex-grow">{item.description}</p>
              <span className="text-lg font-bold text-white">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
