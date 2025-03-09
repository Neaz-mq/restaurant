import { useEffect } from "react";
import FeaturedDishes from "../FeaturedDishes/FeaturedDishes";
import RestaurantAmbiance from "../RestaurantAmbiance/RestaurantAmbiance";
import ChefSpecials from "../ChefSpecials/ChefSpecials";
import CustomerExperiences from "../CustomerExperiences/CustomerExperiences";
import HeroGallery from "../HeroGallery/HeroGallery";

const Galleries = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <HeroGallery />
            <FeaturedDishes />
            <RestaurantAmbiance />
            <ChefSpecials />
            <CustomerExperiences />
        </div>
    );
};

export default Galleries;
