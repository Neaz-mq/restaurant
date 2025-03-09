import { useEffect } from "react";
import HeroAbout from "../HeroAbout/HeroAbout";
import OurStory from "../OurStory/OurStory";
import OurTeam from "../OurTeam/OurTeam";
import Sustainability from "../Sustainability/Sustainability";
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
            <VisitUs></VisitUs>
        </div>
    );
};

export default Abouts;
