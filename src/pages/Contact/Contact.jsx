import { useEffect } from "react";
import HeroContact from "../HeroContact/HeroContact";
import ContactDetails from "../ContactDetails/ContactDetails";
import GoogleMapEmbed from "../GoogleMapEmbed/GoogleMapEmbed";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeroContact />
            <ContactDetails />
            <GoogleMapEmbed />
            <ContactForm />
        </div>
    );
};

export default Contact;
