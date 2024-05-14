import { Helmet } from "react-helmet-async";
import Banner from "./Component/Banner";
import Contact from "./Component/Contact";
import Slider from "./Component/Slider";
import RecentQuery from "./Component/RecentQuery";

 


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <RecentQuery></RecentQuery>
            <Banner></Banner>
            <Contact></Contact>
        </div>
    );
};

export default Home;