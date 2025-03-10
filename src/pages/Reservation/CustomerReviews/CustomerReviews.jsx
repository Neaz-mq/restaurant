import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophia Carter",
    review: "Amazing experience! The service was top-notch and the food was delightful.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Anderson",
    review: "A wonderful place with great ambiance. Will definitely visit again!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Brown",
    review: "Loved everything about it! Highly recommend to everyone.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

const CustomerReviews = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 py-24">
      <h2 className="text-4xl font-bold text-white mb-8">What Our Customers Say</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {reviews.map(({ id, name, review, rating, image }) => (
          <motion.div
            key={id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-white flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-400 text-sm mt-2">{review}</p>
            <div className="flex mt-3">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerReviews;
