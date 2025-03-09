const ChefSpecials = () => {
    return (
      <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative py-24 overflow-hidden">
        {/* Neon Blobs for Background Animation */}
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
  
        {/* Neon Title */}
        <div className="text-center mb-12 p-4 relative z-10">
          <h1 className="text-5xl font-extrabold neon-text animate-neonPulse">
            Chef's Special Creations
          </h1>
          <p className="text-xl text-gray-300 neon-subheading mt-4">
            Handcrafted dishes made to perfection
          </p>
        </div>
  
        {/* Section with Chef Special Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full relative z-10">
          {/* Image 1 - Signature Dish */}
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741503336/Signature_Dish_gi7zfv.jpg"
              alt="Signature Dish"
              className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center rounded-xl group-hover:bg-opacity-30 transition-all duration-500">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Signature Dish
              </p>
            </div>
          </div>
  
          {/* Image 2 - Gourmet Special */}
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741503168/Gourmet_Special_rt7imz.jpg"
              alt="Gourmet Special"
              className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center rounded-xl group-hover:bg-opacity-30 transition-all duration-500">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Gourmet Special
              </p>
            </div>
          </div>
  
          {/* Image 3 - Dessert Special */}
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741502721/Dessert_Special_k9yeys.jpg"
              alt="Dessert Special"
              className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center rounded-xl group-hover:bg-opacity-30 transition-all duration-500">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Dessert Special
              </p>
            </div>
          </div>
        </div>
  
        {/* Description Section */}
        <div className="text-center mt-12 p-4 max-w-4xl mx-auto relative z-10">
          <p className="text-lg text-gray-300 mb-6">
            Our chef's special creations are designed to elevate your dining experience. Each dish is crafted with the finest ingredients and prepared with precision to give you a memorable taste of culinary art. Whether you're here for the signature mains or our mouthwatering desserts, we promise a treat for your senses.
          </p>
          <p className="text-lg text-yellow-400 font-bold neon-subheading">
            Taste the art of gourmet cooking!
          </p>
        </div>
      </section>
    );
  };
  
  export default ChefSpecials;
  