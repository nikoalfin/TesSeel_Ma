import Header from '../Components/Header';
import Section1News from '../Components/News/Section1News';

function DetailNews() {
  return (
    <section className="relative w-full">
      <Header />
      <div className="max-w-[1440px] mx-auto w-full h-auto px-36 py-12">
        <div className="flex items-start gap-3 mt-16">
          <div className='w-[70%]'>
            <Section1News />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default DetailNews;
