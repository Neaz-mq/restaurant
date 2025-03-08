const HeroAbout = () => {
    return (
        <div className="relative bg-cover bg-center h-[800px] flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('https://res.cloudinary.com/dzi3u164c/image/upload/v1741422779/about_r0epxm.jpg')" }}>
            <div className="bg-black bg-opacity-50 p-10 rounded-xl">
                <h1 className="text-5xl font-bold mb-4">Our Story, Our Passion</h1>
                <p className="text-lg max-w-2xl mx-auto">Discover the heart behind TrendyBites—where every dish tells a story, and every meal is a celebration of flavors.</p>
            </div>
        </div>
    );
};

export default HeroAbout;
