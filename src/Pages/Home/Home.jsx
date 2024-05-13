import { Helmet } from "react-helmet-async";
import Banner from "./Component/Banner";
import Contact from "./Component/Contact";
import Slider from "./Component/Slider";

 


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <Banner></Banner>
            <Contact></Contact>
        </div>
    );
};

export default Home;