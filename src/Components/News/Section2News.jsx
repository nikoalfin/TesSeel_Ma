import Image6 from '../../assets/img/Image6.png';
import Image7 from '../../assets/img/Image7.png';
import Image8 from '../../assets/img/Image8.png';

function Section2News(){
    return (
      <div className="mt-32">
        <div className="flex items-center gap-2">
          <nav className="w-1 h-8 bg-[#0090FF]"></nav>
          <h3 className="text-xl font-bold font-Nunito">Komentar</h3>
        </div>
        <div className="flex items-start gap-2 mt-10 ml-3">
          <img src={Image6} alt="" className="w-12 h-12" />
          <div className="font-Inter">
            <form>
          
              <textarea name="" id="" className="w-[480px] h-40 outline-none border-2 text-sm rounded-lg p-2 text-[#959EA9] resize-none">
                Apa yang ingin anda tanyakan?
              </textarea>
            </form>
            <p className="text-[#959EA9] ml-[430px]">0/50</p>
            <button className="w-16 h-10 rounded-lg bg-[#0090FF] text-white font-Inter text-sm">Kirim</button>
          </div>
        </div>

        <br />
        <hr />

        <div className="flex items-start gap-2 mt-10 ml-3">
          <img src={Image7} alt="" className="w-12 h-12" />
          <div className="font-Inter">
            <div className="text-[#959EA9] flex items-end gap-2">
              <h5>UJANG YUSMEIDI S.P., M.Agr.</h5>
              <p className="text-xs">28 Mar 2024 11:15</p>
            </div>
            <p className="my-3 text-sm">Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?</p>
            <button className="text-[#0090FF] font-semibold text-sm">Balas</button>

            <div className="flex items-start gap-2 mt-5">
              <img src={Image8} alt="" className="w-12 h-12" />
              <div className="font-Inter">
                <div className="text-[#959EA9] flex items-end gap-2">
                  <h5>DINA RIKHA RIYANAWATI, S.Pd</h5>
                  <p className="text-xs">28 Mar 2024 11:15</p>
                </div>
                <p className="my-3 text-sm">saya mengunduh sertifikatnya kok juga belumbisa</p>
                <button className="text-[#0090FF] font-semibold text-sm">Balas</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
      </div>
    );
}

export default Section2News;