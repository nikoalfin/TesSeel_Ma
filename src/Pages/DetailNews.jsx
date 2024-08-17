import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Section1News from '../Components/News/Section1News';
import Section2News from '../Components/News/Section2News';
import Section3News from '../Components/News/Section3News';
import Section4News from '../Components/News/Section4News';

function DetailNews() {
  return (
    <section className="relative w-full">
      <Header />
      <div className="max-w-[1440px] mx-auto w-full h-auto px-36 py-12">
        <div className="flex items-start gap-7 mt-16">
          <div className='w-[70%]'>
            <Section1News/>
            <Section2News/>
            <Section3News/>
          </div>
          <div className='w-[30%]'>
            <Section4News/>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default DetailNews;
