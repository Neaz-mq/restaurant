const OurStory = () => {
    return (
        <div className="bg-gray-900 text-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">🍽️ Our Story</h2>
                <p className="text-lg max-w-3xl mx-auto mb-6">
                    From a small family kitchen to a bustling hotspot, TrendyBites was born out of a love for flavors and unforgettable dining experiences. We blend tradition with innovation, crafting dishes that bring people together.
                </p>
                <div className="flex justify-center">
                    <img 
                        src="https://res.cloudinary.com/dzi3u164c/image/upload/v1741423595/story_q2socn.jpg" 
                        alt="Our Story" 
                        className="w-full max-w-3xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
                    />
                </div>
            </div>
        </div>
    );
};

export default OurStory;
