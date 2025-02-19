import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import FeaturedDishes from "../FeaturedDishes/FeaturedDishes";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedDishes></FeaturedDishes>
           <CallToAction></CallToAction>
        </div>
    );
};

export default Home;