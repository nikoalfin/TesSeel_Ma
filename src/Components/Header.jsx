import Logo from "../assets/img/logo.png"

function Header(){
    return (
      <section className="fixed w-full border-b-2 z-10">
        <div className="flex justify-around items-center max-w-[1440px] mx-auto w-full h-[80px]">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <h1 className="font-bold font">Berita Kini</h1>
          </div>
          <div>
            <ul className="flex gap-8 text-base">
              <li>Beranda</li>
              <li>Terbaru</li>
              <li>Hiburan</li>
              <li>Gaya Hidup</li>
              <li>Olahraga</li>
              <li>Nasional</li>
              <li>Internasional</li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default Header;