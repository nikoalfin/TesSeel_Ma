import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Section1News from '../Components/News/Section1News';
import Section2News from '../Components/News/Section2News';
import Section3News from '../Components/News/Section3News';
import Section4News from '../Components/News/section4News';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';

function DetailNews() {
  return (
    <section className="relative w-full">
      <Header />

      <div className="max-w-[1440px] mx-auto w-full h-auto px-14 py-12">
        <div className="flex items-center gap-2 h-28 w-36 mt-20 text-[#959EA9] font-semibold">
          <p>
            <IoHomeOutline />
          </p>
          <p className="hover:cursor-pointer">Beranda</p>
          <p>
            <MdKeyboardArrowRight />
          </p>
          <p className="hover:cursor-pointer">Nasional</p>
          <p>
            <MdKeyboardArrowRight />
          </p>
          <p className="hover:cursor-pointer">Detail</p>
        </div>
        <div className="flex items-start gap-7">
          <div className="w-[60%]">
            <Section1News />
            <Section2News />
            <Section3News />
          </div>
          <div className="w-[38%]">
            <Section4News />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default DetailNews;
