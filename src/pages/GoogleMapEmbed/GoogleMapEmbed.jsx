const GoogleMapEmbed = () => {
    return (
        <section className="bg-gray-900 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        Find Us on the Map
                    </h2>
                    <p className="text-lg text-gray-300 mt-4">
                        Visit our location in Jaleshoritola, Bogura Sadar, Bangladesh.
                    </p>
                </div>

                {/* Google Map */}
                <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                    <iframe
                        title="Google Map"
                        className="w-full h-[450px] md:h-[550px] rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.221708335329!2d89.36662737585752!3d24.848082645058328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbffddf2e3ed07%3A0x1e6f2df5e6c3e223!2sJaleshoritola%2C%20Bogura%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1710135263049!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default GoogleMapEmbed;
