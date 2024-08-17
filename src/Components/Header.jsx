import { useEffect, useState } from 'react';
import LogoWhite from '../assets/img/Logo-white.png';
import LogoBlue from '../assets/img/logo.png';
import { useFilter } from '../Context/FilterContext';

function Header() {
  const { Filter, setFilter } = useFilter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`fixed w-full border-b-2 z-10 transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-[#0090FF] text-white' : 'bg-transparent text-black'} `}>
      <div className="flex justify-around items-center max-w-[1440px] mx-auto w-full h-[80px]">
        <div className="flex justify-center items-center gap-2">
          <img src={isScrolled ? LogoWhite : LogoBlue} alt="Logo" className="w-10 h-10" />
          <h1 className="font-bold font">Berita Kini</h1>
        </div>
        <div>
          <ul className="flex gap-8 text-base font-Nunito">
            <li className="hover:text-slate-700">
              <button onClick={() => setFilter('nasional')}>Beranda</button>
            </li>
            <li className="hover:text-slate-700">
              <button href="" onClick={() => setFilter('terbaru')}>
                Terbaru
              </button>
            </li>
            <li className="hover:text-slate-700">
              <button href="" onClick={() => setFilter('hiburan')}>
                Hiburan
              </button>
            </li>
            <li className="hover:text-slate-700">
              <button href="" onClick={() => setFilter('gayaHidup')}>
                Gaya Hidup
              </button>
            </li>
            <li className="hover:text-slate-700">
              <button href="" onClick={() => setFilter('olahraga')}>
                Olahraga
              </button>
            </li>
            <li className="hover:text-slate-700">
              <button href="" onClick={() => setFilter('nasional')}>
                Nasional
              </button>
            </li>
            <li className="hover:text-slate-700">
              <button href="" onClick={() => setFilter('internasional')}>
                Internasional
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
