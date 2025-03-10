import { useState } from "react";
import { motion } from "framer-motion";

const timeSlots = [
  { time: "12:00 PM", status: "Available" },
  { time: "12:30 PM", status: "Available" },
  { time: "1:00 PM", status: "Reserved" },
  { time: "1:30 PM", status: "Available" },
  { time: "2:00 PM", status: "Available" },
  { time: "6:00 PM", status: "Reserved" },
  { time: "6:30 PM", status: "Available" },
  { time: "7:00 PM", status: "Available" },
  { time: "7:30 PM", status: "Reserved" },
  { time: "8:00 PM", status: "Available" }
];

const AvailableSlots = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <section className="py-24 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Available Time Slots</h2>
      <p className="text-lg mb-8 opacity-80">
        Choose your preferred time to dine with us. Select an available time slot.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {timeSlots.map((slot, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-6 py-3 text-lg font-semibold rounded-md border-2 transition duration-300 cursor-pointer transform ${
              selectedSlot === slot.time
                ? "bg-yellow-400 text-black shadow-lg"
                : slot.status === "Reserved"
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            }`}
            onClick={() => slot.status !== "Reserved" && setSelectedSlot(slot.time)}
            disabled={slot.status === "Reserved"}
          >
            <div className="flex items-center justify-center">
              <span>{slot.time}</span>
              {slot.status === "Reserved" && (
                <span className="ml-2 text-xs text-gray-300">Reserved</span>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <p className="mt-8 text-lg opacity-70">
        Please select an available slot to reserve your table.
      </p>
    </section>
  );
};

export default AvailableSlots;
