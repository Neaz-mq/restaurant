import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservationForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const showToast = (message, isError) => {
    toast(message, {
      position: "bottom-center",
      className: isError ? "error-toast" : "success-toast",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataEntries = new FormData(formRef.current);
    let isEmpty = false;

    for (let pair of formDataEntries.entries()) {
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
      .sendForm(
        "service_q34s3of", 
        "template_a72ajwj", 
        formRef.current, 
        "UYc-cRy2E2HxVAyKv"
      )
      .then(
        () => {
          formRef.current.reset();
          setIsLoading(false);
          showToast("✅ Reservation submitted successfully!", false);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setIsLoading(false);
          showToast("❌ Failed to submit reservation. Try again!", true);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <div className="absolute -top-20 -left-40 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="bg-gray-600 p-8 rounded-xl shadow-lg w-full max-w-lg z-10 relative">
        <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar className="toast-container" />

        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          Reserve Your Table
        </h1>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-white">Full Name</label>
            <motion.input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your name"
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-white">Email</label>
            <motion.input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-white">Phone Number</label>
            <motion.input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your phone number"
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-white">Date</label>
            <motion.input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg mb-2 text-white">Time</label>
            <motion.select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              whileFocus={{ scale: 1.05 }}
            >
              <option value="">Select Time</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="1:30 PM">1:30 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </motion.select>
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {isLoading ? "Submitting..." : "Reserve Now"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
