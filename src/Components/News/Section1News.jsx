import Image5 from '../../assets/img/Image5.png';

function Section1News() {
  return (
    <div>
      <h1 className="font-extrabold mt-5 font-Nunito text-2xl w-[570px]">Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo</h1>
      <div className="flex items-center gap-3 mt-4 text-base font-Inter">
        <p className="text-[#0090FF] font-bold">Publik</p>
        <p>22 Jan 2024</p>
      </div>
      <img src={Image5} alt="" className="w-[800px] rounded-3xl mt-5" />
      <p className="text-[#959EA9] mt-3 text-[11px] w-[800px]">Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah kandang. (CNN Indonesia/Adhi Wicaksono)</p>

      <div className='flex flex-col mt-3 gap-4 font-Inter text-sm'>
        <p>
          Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026. Akhir-akhir
          ini rumput lapangan Stadion GBK yang jadi markas Indonesia dalam babak kedua Kualifikasi Piala Dunia 2026 kerap bermasalah. Pada pertandingan kandang pertama melawan Vietnam, Maret lalu, rumput GBK rusak parah. PPKGBK selalu
          pengelola pun mendapat kritik deras.
        </p>

        <p>
          Acara-acara di luar sepak bola itu kerap membuat kondisi rumput tidak sehat dan tidak terlihat bagus saat pertandingan, khususnya laga Timnas Indonesia. Sampai saat melawan Irak, rumput GBK tidak terlihat sempurna meskipun
          kondisinya lebih bagus dibanding lawan Vietnam. Opsi pindah kandang pun muncul.
        </p>
        <p>
          "Nanti kami akan sampaikan [rencana pindah dari GBK]," ujar Sumardji saat ditanya kemungkinan menggunakan stadion lain di putaran ketiga kualifikasi. Sumardji tidak membantah kondisi rumput GBK yang masih kurang bagus dalam duel
          Indonesia vs Irak. PSSI pun berharap PPKGBK bisa lebih memperhatikan kondisi rumput untuk pertandingan Skuad Garuda. "Kami sampai saat ini sudah telepon dengan pengelola GBK karena kondisi rumput kemarin kurang bagus, kami memohon
          ke pihak GBK supaya betul-betul disiapkan dan diperhatikan kondisi rumput," tutur Sumardji. "Kalau dilihat-lihat sepertinya kondisi rumput GBK kayaknya stres itu, sehingga dengan kondisi itu akan memengaruhi, tadi saya telepon
          supaya diperhatikan," kata Sumardji menambahkan.
        </p>
      </div>
    </div>
  );
}

export default Section1News;
