import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const showToast = (message, isError) => {
        toast(message, {
            position: "top-center",
            className: isError ? "error-toast" : "success-toast",
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        let isEmpty = false;

        for (let pair of formData.entries()) {
            if (!pair[1]) {
                isEmpty = true;
                break;
            }
        }

        if (isEmpty) {
            showToast("⚠️ Please fill in all fields!", true);
            return;
        }

        setIsLoading(true);

        emailjs
            .sendForm("service_fx24x9m", "template_b79muoi", formRef.current, {
                publicKey: "ivFFlRTErWxcweyAD",
            })
            .then(
                () => {
                    formRef.current.reset();
                    setIsLoading(false);
                    showToast("✅ Message sent successfully!", false);
                },
                (error) => {
                    console.error("Email send failed:", error.text);
                    setIsLoading(false);
                    showToast("❌ Failed to send message. Try again!", true);
                }
            );
    };

    return (
        <section className="bg-gray-900 py-16 px-6">
            <div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-xl shadow-lg">
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
                
                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-300 mt-4">
                        We’d love to hear from you! Fill out the form below.
                    </p>
                </div>

                {/* Contact Form */}
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label className="block text-lg mb-2 text-white">Name</label>
                        <input
                            type="text"
                            name="from_name"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-lg mb-2 text-white">Email</label>
                        <input
                            type="email"
                            name="from_email"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                            placeholder="Your Email"
                        />
                    </div>

                    <div>
                        <label className="block text-lg mb-2 text-white">Message</label>
                        <textarea
                            rows="5"
                            name="message"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full md:w-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-md ${
                                isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {isLoading ? "Sending..." : "Send Message 🚀"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
