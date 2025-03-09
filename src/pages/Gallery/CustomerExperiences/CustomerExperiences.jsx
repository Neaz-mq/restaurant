const CustomerExperiences = () => {
    return (
      <section className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black text-white flex flex-col justify-center items-center py-24 relative">
        {/* Title Section */}
        <div className="text-center mb-16 p-4">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 inline-block">
            What Our Customers Are Saying
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Hear from some of our valued guests who’ve experienced unforgettable moments with us.
          </p>
        </div>
  
        {/* Customer Experience Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 mb-16">
          {/* Image 1 - Happy Customer */}
          <div className="relative group overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741503950/A_Truly_Memorable_Experience_caiagz.jpg"
              alt="Happy Customer"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center group-hover:bg-opacity-50 transition-all duration-300">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                "A Truly Memorable Experience!"
              </p>
            </div>
          </div>
  
          {/* Image 2 - Customer Group */}
          <div className="relative group overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741508374/Dining_with_Friends_cno3so.jpg"
              alt="Customer Group"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center group-hover:bg-opacity-50 transition-all duration-300">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                "Fantastic Dining with Friends!"
              </p>
            </div>
          </div>
  
          {/* Image 3 - Couple Dining */}
          <div className="relative group overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <img
              src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741508510/Romantic_Night_Out_nrf0bn.jpg"
              alt="Couple Dining"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center group-hover:bg-opacity-50 transition-all duration-300">
              <p className="text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                "A Romantic Night Out"
              </p>
            </div>
          </div>
        </div>
  
        {/* Testimonial Section */}
        <div className="text-center mt-12 p-4 max-w-5xl mx-auto">
          <p className="text-lg text-gray-300 mb-8">
            "The ambiance, food, and service were impeccable. This is now my go-to place for any celebration. I highly recommend the weekend feast – it was amazing!"
          </p>
          <div className="bg-gray-900 text-white p-8 rounded-xl shadow-xl max-w-xl mx-auto mb-12">
            <p className="italic text-lg">
              "I’ve never had such a fantastic dining experience! The ambiance was stunning, and the food was out of this world. I will definitely be back with my family!" -{" "}
              <span className="font-semibold">Sarah T.</span>
            </p>
          </div>
          
          {/* New Visual Element: Quote */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute top-0 right-0 transform -translate-x-16 translate-y-16">
              <svg width="100" height="100" className="text-yellow-400 opacity-20 animate-pulse" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="5" fill="none" />
              </svg>
            </div>
            <div className="bg-gray-700 text-white p-8 rounded-xl shadow-2xl">
              <p className="text-xl font-semibold italic">
                "An experience that left me speechless. The service was exceptional, and the memories I’ve made here will last a lifetime!" -{" "}
                <span className="font-bold">John D.</span>
              </p>
            </div>
          </div>
  
          {/* Optional Text Styling */}
          <p className="text-lg text-yellow-500 font-bold mt-8 text-2xl">
            Your unforgettable memories are just a visit away!
          </p>
        </div>
      </section>
    );
  };
  
  export default CustomerExperiences;
  