import Logo from '../assets/img/logo.png';
import { useFilter } from '../Context/FilterContext';

function Header() {
  const { Filter, setFilter } = useFilter();
  return (
    <section className="fixed w-full border-b-2 z-10">
      <div className="flex justify-around items-center max-w-[1440px] mx-auto w-full h-[80px]">
        <div className="flex justify-center items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="font-bold font">Berita Kini</h1>
        </div>
        <div>
          <ul className="flex gap-8 text-base font-Nunito">
            <li>
              <button onClick={() => setFilter('nasional')}>Beranda</button>
            </li>
            <li>
              <button href="" onClick={() => setFilter('terbaru')}>
                Terbaru
              </button>
            </li>
            <li>
              <button href="" onClick={() => setFilter('hiburan')}>
                Hiburan
              </button>
            </li>
            <li>
              <button href="" onClick={() => setFilter('gayaHidup')}>
                Gaya Hidup
              </button>
            </li>
            <li>
              <button href="" onClick={() => setFilter('olahraga')}>
                Olahraga
              </button>
            </li>
            <li>
              <button href="" onClick={() => setFilter('nasional')}>
                Nasional
              </button>
            </li>
            <li>
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
