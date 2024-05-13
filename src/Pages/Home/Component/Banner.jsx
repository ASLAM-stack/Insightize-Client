import { Fade, JackInTheBox, Rotate } from "react-awesome-reveal";
import { Link } from "react-router-dom";

 

const Banner = () => {
    return (
        <div className=" space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col justify-center bg-center rounded-2xl  mt-24 banner">
                         <div className="space-y-2 border-l-2 pl-4 border-[#c65ce0d2]">
            <JackInTheBox direction='down' triggerOnce={true}>
              <p className="text-xl font-medium  text-[#e64210ec]">Welcome to <span className="font-satis"> Insightize</span></p>
              </JackInTheBox>
              <Rotate triggerOnce={true} delay={2}>
              <h1 className="md:text-7xl font-bold text-white font-robo text-2xl">
              Boycott the product <br /> Stand with humanity
              </h1>
              </Rotate>
              
              <Fade direction='up' triggerOnce={true}>
              <Link className="btn btn-outline btn-secondary">
                Query Now</Link>
              </Fade>
            </div>
            
        </div>
    );
};

export default Banner;