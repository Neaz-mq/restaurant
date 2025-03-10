import { useEffect } from "react";
import HeroReservation from "../HeroReservation/HeroReservation";
import ReservationForm from "../../ReservationForm/ReservationForm";
import AvailableSlots from "../../AvailableSlots/AvailableSlots";
import CustomerReviews from "../../CustomerReviews/CustomerReviews";

const Reservations = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeroReservation />
            <AvailableSlots />
            <ReservationForm />
            <CustomerReviews />
        </div>
    );
};

export default Reservations;
