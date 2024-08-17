function Card2(props){
  const {img,title,type,date,onClick } = props;

  // change date
   const formattedDate = new Date(date).toLocaleDateString('id-ID', {
     day: 'numeric',
     month: 'long',
     year: 'numeric'
   });


  return (
    <div className="relative w-[204px] gap-2 h-[280px] hover:cursor-pointer" onClick={onClick}>
      <img src={img} alt="" className="w-64 rounded-xl" />

      <div className="flex flex-col justify-between items-start">
        <h5 className="text-sm font-extrabold font-Nunito h-24 py-2">{title}</h5>

        <div className="flex items-center gap-8 text-base bottom-0">
          <p className="text-[#0090FF] font-bold font-Inter">{type}</p>
          <p className="font-Inter text-xs text-[#526071]">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Card2;