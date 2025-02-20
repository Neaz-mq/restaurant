import { motion } from 'framer-motion';
import Slider from 'react-slick'; // For slick carousel
import 'slick-carousel/slick/slick.css'; // Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick theme CSS

// Testimonials data
const testimonials = [
  {
    name: 'Jane Doe',
    review: "The best dining experience I've ever had! Amazing food and service.",
    image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1739354768/men2_pleix9.jpg',
  },
  {
    name: 'John Smith',
    review: "Delicious dishes, cozy atmosphere, and friendly staff. Highly recommend!",
    image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1739353913/1_hazukt.jpg',
  },
  {
    name: 'Emily White',
    review: 'A must-visit! The flavors were incredible, and the ambiance was perfect.',
    image: 'https://res.cloudinary.com/dzi3u164c/image/upload/v1739353953/abir_niooff.jpg',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 1,
          dots: true,
          customPaging: () => (
            <div className="w-3 h-3 bg-white rounded-full shadow-md mt-4"></div> // Added margin-top
          ),
          arrows: false, // Hide arrows on mobile/tablet
        },
      },
      {
        breakpoint: 1025, // Desktop and above
        settings: {
          slidesToShow: 1,
          dots: false, // Hide dots on larger screens
          arrows: true, // Enable arrows on desktop
        },
      },
    ],
  };


  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">
      {/* Neon Blobs */}
      <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl text-white font-extrabold mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          What Our Customers Say
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black/80 rounded-xl shadow-lg p-8 space-y-4 transform transition duration-500 hover:scale-105 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Neon Border Glow */}
              <div className="absolute inset-0 bg-gray-600 rounded-xl opacity-20 blur-md"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <blockquote className="italic text-lg text-white">
                  "{testimonial.review}"
                </blockquote>
                <p className="font-semibold text-xl text-white">- {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
