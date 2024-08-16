import Logo from '../assets/img/logo.png';
import { FaSquareYoutube } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  return (
    <section className="relative w-full bg-[#2C3C4D]">
      <div className="max-w-[1440px] mx-auto w-full h-auto px-36 flex items-start gap-10 text-white py-20">
        <div className="w-[600px]">
          <div className="flex justify-center items-center gap-2 -ml-[190px]">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <h1 className="font-bold text-2xl">Berita Kini</h1>
          </div>
          <p className="text-xs mt-3">© 2023 Berita Kini. All Rights Reserved</p>
          <h4 className="mt-10 font-semibold text-xl">Ikuti Kami</h4>
          <div className="flex items-center gap-4 mt-3">
            <FaSquareYoutube className="w-8 h-8" />
            <FaInstagramSquare className="w-8 h-8" />
            <FaFacebookSquare className="w-8 h-8" />
          </div>
        </div>
        <div className="w-72">
          <h4 className="font-semibold text-xl">Telusuri</h4>
          <ul className="mt-7 flex flex-col gap-2">
            <li>Beranda</li>
            <li>Kesehatan</li>
            <li>Otomotif</li>
            <li>Politik</li>
            <li>Olahraga</li>
            <li>Nasional</li>
            <li>Internasional</li>
          </ul>
        </div>
        <div className="w-64">
          <h4 className="font-semibold text-xl">Bantuan</h4>
          <ul className="mt-7 flex flex-col gap-2">
            <li>Kontak Kami</li>
            <li>Laporan Pembajakan</li>
            <li>Kebijakan</li>
          </ul>
        </div>
        <div className="w-[600px]">
          <h4 className="font-semibold text-xl">Berlangganan Berita Terbaru</h4>
          <form className="bg-white w-64 mt-5 rounded-md flex items-center">
            <input type="text" placeholder="Masukan Email" className="outline-none text-black px-2 py-2 rounded-md" />
            <FaTelegramPlane className="w-7 h-7 text-[#0090ff] ml-3" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Footer;
