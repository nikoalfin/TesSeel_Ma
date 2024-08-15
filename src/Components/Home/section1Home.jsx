 import Image from '../../assets/img/Image1.png'
function section1Home() {
  return (
    <section className="relative w-full top-36">
      <div className="max-w-[1440px] mx-auto w-full h-screen px-14">
        <div className="flex justify-center items-center gap-4">
          <div>
            <p>headline</p>
            <h1 className="font-bold font-Nunito text-4xl w-[500px]">Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi</h1>       
            <p className='w-[470px] mt-3'>Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.</p>
            <nav className="flex mt-3 gap-3">
              <p>dd</p>
              <p>22 januari 2024</p>
            </nav>
            <nav className='mt-3 flex gap-3'>
              <a href="">Baca Selengkapnya</a>
              <p>shd</p>
            </nav>
          </div>
          <div>
            <img src={Image} alt="" className="w-[600px] h-auto" />
          </div>
        </div>
        <div className="flex justify-center gap-3 items-center mt-6">
          <p> k </p>
          <p>1</p>
          <p>dari</p>
          <p>5</p>
          <p>k</p>
        </div>
      </div>
    </section>
  );
}

export default section1Home;
