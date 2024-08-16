import Image4 from '../../assets/img/Image4.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Section4Home() {
  return (
    <section className="relative w-full mt-5">
      <div className="max-w-[1440px] mx-auto w-full h-auto px-36 py-12">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[420px] pb-20">
          <SwiperSlide>
            <img src={Image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Section4Home;
