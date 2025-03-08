import { useEffect } from "react";
import HeroAbout from "../HeroAbout/HeroAbout";
import OurStory from "../OurStory/OurStory";
import OurTeam from "../OurTeam/OurTeam";
import Sustainability from "../Sustainability/Sustainability";
import Reviews from "../Reviews/Reviews";
import VisitUs from "../VisitUs/VisitUs";

const Abouts = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div>
            <HeroAbout></HeroAbout>
            <OurStory></OurStory>
            <OurTeam></OurTeam>
            <Sustainability></Sustainability>
            <Reviews></Reviews>
            <VisitUs></VisitUs>
        </div>
    );
};

export default Abouts;
