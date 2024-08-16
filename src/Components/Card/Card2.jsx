// import Image3 from '../../assets/img/Image3.png'
function Card2(props){
  const {img,title,type,date } = props;

  return (
    <div className="relative w-[250px] h-[350px] gap-3">
      <img src={img} alt="" className="w-64 rounded-xl" />

      <div>
        <h5 className="text-lg font-extrabold font-Nunito">{title}</h5>

        <div className="flex items-center gap-3 mt-9 text-base">
          <p className="text-[#0090FF] font-bold font-Inter">{type}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card2;