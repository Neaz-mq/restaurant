const RestaurantAmbiance = () => {
    return (
      <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative py-24 overflow-hidden">
        {/* Neon Blobs for Background Animation */}
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
  
        {/* Neon Title */}
        <div className="text-center mb-12 p-4 relative z-10">
          <h1 className="text-5xl font-extrabold neon-text animate-neonPulse">
            Experience Our Restaurant Ambiance
          </h1>
          <p className="text-xl text-gray-300 neon-subheading mt-4">
            A perfect blend of elegance, warmth, and modern design
          </p>
        </div>
  
        {/* Section with Restaurant Ambiance Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full relative z-10">
          {/* Image 1 - Restaurant Interior */}
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741501201/Cozy_Dining_Area_itqlsm.jpg"
              alt="Restaurant Interior"
              className="w-full h-72 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center rounded-xl group-hover:bg-opacity-30 transition-all duration-500">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Cozy Dining Area
              </p>
            </div>
          </div>
  
          {/* Image 2 - Table Setup */}
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741501492/Elegant_Table_Settings_p3wlmh.jpg"
              alt="Table Setup"
              className="w-full h-72 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center rounded-xl group-hover:bg-opacity-30 transition-all duration-500">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Elegant Table Settings
              </p>
            </div>
          </div>
  
          {/* Image 3 - Decor Lighting */}
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741501651/Relaxing_Ambient_Lighting_ic000k.jpg"
              alt="Decor Lighting"
              className="w-full h-72 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center rounded-xl group-hover:bg-opacity-30 transition-all duration-500">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Relaxing Ambient Lighting
              </p>
            </div>
          </div>
        </div>
  
        {/* Description Section */}
        <div className="text-center mt-12 p-4 max-w-4xl mx-auto relative z-10">
          <p className="text-lg text-gray-300 mb-6">
            Our restaurant ambiance is designed to elevate your dining experience. Whether you're here for a casual meal or a special occasion, we create the perfect atmosphere for you. The ambiance reflects a perfect balance of warm and modern touches, with cozy seating, exquisite lighting, and elegant table settings. Every detail is crafted to give you an unforgettable experience.
          </p>
          <p className="text-lg text-yellow-400 font-bold neon-subheading">
            Join us for an extraordinary dining experience!
          </p>
        </div>
      </section>
    );
  };
  
  export default RestaurantAmbiance;
  