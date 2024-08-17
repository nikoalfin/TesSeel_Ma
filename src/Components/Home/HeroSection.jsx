import Image from '../../assets/img/Image1.png';
import { SlCalender } from 'react-icons/sl';
import { BsArrowUpRight } from 'react-icons/bs';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="max-w-[1440px] mx-auto w-full h-auto px-14 pt-36">
        <div className="flex justify-center items-center gap-4 font-Inter">
          <div>
            <p className="text-[#526071] font-semibold">Headline</p>
            <h1 className="font-extrabold mt-5 font-Nunito text-4xl w-[500px]">Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi</h1>
            <p className="w-[470px] mt-3">Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.</p>
            <nav className="flex items-center mt-3 gap-2">
              <div>
                <SlCalender className="font-extrabold" />
              </div>
              <p className="text-sm">22 januari 2024</p>
            </nav>
            <nav className="mt-3 flex items-center gap-2">
              <a href="" className="text-[#0090FF]">
                Baca Selengkapnya
              </a>
              <div>
                <BsArrowUpRight className="text-[#0090FF]" />
              </div>
            </nav>
          </div>
          <div>
            <img src={Image} alt="" className="w-[600px] h-auto" />
          </div>
        </div>
        <div className="flex justify-center gap-3 items-center mt-6">
          <p>
            <MdKeyboardArrowLeft className="w-6 h-6 hover:cursor-pointer" />
          </p>
          <p>1</p>
          <p>dari</p>
          <p>5</p>
          <p>
            <MdKeyboardArrowRight className="w-6 h-6 hover:cursor-pointer" />
          </p>
        </div>

        {/* <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[420px] w-full bg-slate-500"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
}

export default HeroSection;
