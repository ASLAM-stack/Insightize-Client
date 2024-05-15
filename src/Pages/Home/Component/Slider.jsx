import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Slider = () => {
  return (
    <div className="mt-12 p-2 md:p-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('/slider1.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col justify-center bg-center rounded-2xl silder_1" >
            <div className="space-y-2 border-l-2 pl-4 border-[#c65ce0d2]">
            <Fade direction='down' triggerOnce={true}>
              <p className="text-xl font-medium  text-[#e64210ec]">Welcome to <span className="font-satis"> Insightize</span></p>
              </Fade>
              <h1 className="md:text-7xl font-bold text-white font-robo text-2xl">
                Explore to find <br />
                Quality full product
              </h1>
              <Fade direction='up' triggerOnce={true}>
              <Link className="btn btn-outline btn-secondary">Discover Now</Link>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/slider2.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col justify-center bg-center rounded-2xl silder_1" >
            <div className="space-y-2 border-l-2 pl-4 border-[#c65ce0d2]">
            <Slide direction='left' triggerOnce={true}>
              <p className="text-xl font-medium  text-[#e64210ec]">Explore More</p>
              
              <h1 className="md:text-6xl font-bold text-[#4e1111] font-robo text-2xl">
              Discover the perfect <br /> alternative for your needs 
              </h1>
               
              <Link className="btn btn-outline btn-secondary">Discover Now</Link>
               
              </Slide>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/slider3.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col justify-center bg-center rounded-2xl silder_1" >
            <div className="space-y-2 border-l-2 pl-4 border-[#c65ce0d2]">
            <Fade direction='up' triggerOnce={true}>
              <p className="text-xl font-medium  text-[#e64210ec]">
                Make a new choice
              </p>
              
              <h1 className="md:text-6xl font-bold text-white font-robo text-2xl">
              Unlock a world of quality <br />
alternatives tailored to you
              </h1>
               
              <Link className="btn btn-outline btn-secondary">Discover Now</Link>
               
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
