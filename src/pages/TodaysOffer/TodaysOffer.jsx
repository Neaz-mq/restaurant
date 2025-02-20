import { motion } from 'framer-motion';

const TodaysOffer = () => {
  const offers = [
    {
      title: '20% Off on All Pizzas',
      description: 'Experience the cheesy goodness with our wide range of hot, freshly baked pizzas. Perfect for any craving!',
      image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1740043511/pizza_bmtdvq.jpg',
      price: '$9.99',
    },
    {
      title: 'Buy 1 Get 1 Free Burgers',
      description: 'Double the flavor, double the fun! Enjoy our juicy and perfectly grilled burgers with this amazing deal.',
      image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1740043835/burgers_djjaaz.jpg',
      price: '$7.99',
    },
    {
      title: 'Free Fries with Any Combo',
      description: 'Crispy, golden fries served hot! Add crunch to your meal with free fries on every combo purchase.',
      image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1740043911/fries_klrhag.jpg',
      price: '$5.99',
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-950 to-black text-white">
      <motion.h2 
        className="text-5xl font-extrabold mb-16 text-center tracking-wide"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        🔥 Today's Special Offers 🔥
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="w-full h-44 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                Limited Offer
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between h-52">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{offer.title}</h3>
                <p className="text-gray-300 text-sm leading-snug line-clamp-3">
                  {offer.description}
                </p>
              </div>
              <div className="pt-4">
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {offer.price}
                </span>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-500 group-hover:animate-pulse"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TodaysOffer;
