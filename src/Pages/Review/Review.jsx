import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
    const [review, setRiew] = useState([]);
    useEffect(() => {
      fetch('https://insightize-server-fjoy55xri-arif-hossain-aslams-projects.vercel.app/review')
        .then((res) => res.json())
        .then((data) => {
          setRiew(data);
        });
    }, []);
    console.log(review);
    return (
      <div>
         <h1 className='md:text-6xl text-4xl font-robo font-bold text-center'>Our Happy <br /> <span className='text-[#29bd36]'> Client </span></h1>
        <div className="mt-12">
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
            {review.map((item) => (
              <SwiperSlide key={item._id}>
  
                  <div className="text-center flex flex-col items-center justify-center mx-24 my-16">
                      <Rating style={{ maxWidth: 250 }} value={item.rating} readOnly></Rating>
                      <FaQuoteLeft className="text-6xl mt-4" />
                      <p className="py-8">{item.details}</p>
                      <h3 className="text-2xl">{item.name}</h3>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  };

export default Review;