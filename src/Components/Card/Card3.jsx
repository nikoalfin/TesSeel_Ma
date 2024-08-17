import Image3 from '../../assets/img/Image3.png'
function Card3() {

  return (
    <div className="relative w-[168px] h-[280px] flex flex-col gap-1">
      <img src={Image3} alt="" className="w-64 rounded-xl" />

      <div>
        <h5 className="text-xs font-extrabold font-Nunito">Perwira Penerbangan TNl AL Raih Gelar “Double Degree di PSL Université Paris </h5>

        <div className="flex items-center gap-6 mt-9 text-sm">
          <p className="text-[#0090FF] font-bold font-Inter">Nasional</p>
          <p className="font-Inter text-xs text-[#526071]">22 Jan 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Card3;
