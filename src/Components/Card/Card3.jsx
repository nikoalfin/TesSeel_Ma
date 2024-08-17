import Image3 from '../../assets/img/Image3.png'
function Card3() {

  return (
    <div className="relative w-[250px] h-[350px] gap-3">
      <img src={Image3} alt="" className="w-64 rounded-xl" />

      <div>
        <h5 className="text-lg font-extrabold font-Nunito">Perwira Penerbangan TNl AL Raih Gelar “Double Degree di PSL Université Paris </h5>

        <div className="flex items-center gap-3 mt-9 text-base">
          <p className="text-[#0090FF] font-bold font-Inter">Nasional</p>
          <p>22 Jan 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Card3;
