import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import FeaturedDishes from "../FeaturedDishes/FeaturedDishes";
import Testimonials from "../Testimonials/Testimonials";
import TodaysOffer from "../TodaysOffer/TodaysOffer";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedDishes></FeaturedDishes>
           <AboutUs></AboutUs>
           <CallToAction></CallToAction>
           <TodaysOffer></TodaysOffer>
           <Testimonials></Testimonials>                
        </div>
    );
};

export default Home;