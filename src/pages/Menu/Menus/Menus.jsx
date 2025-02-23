import { useEffect } from 'react';
import Categories from "../Categories/Categories"; 
import Deals from "../Deals/Deals";
import Hero from "../Hero/Hero";
import Specials from "../Specials/Specials";

const Menus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            <Specials></Specials>
            <Deals></Deals>
        </div>
    );
};

export default Menus;
