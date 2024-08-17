import Image2 from '../../assets/img/Image2.png'
function Card1(props){
   const { onClick } = props;

    return (
      <div className="relative flex justify-center w-[300px] h-[110px] gap-2 hover:cursor-pointer" onClick={onClick}>
        <img src={Image2} alt="" className="w-40 rounded-xl" /> 

        <div>
          <h5 className="text-sm font-extrabold font-Nunito">Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</h5>

          <div className="flex items-center gap-3 mt-2 text-base font-Inter">
            <p className="text-[#0090FF] font-bold">Politik</p>
            <p className='text-sm'>22 Jan 2024</p>
          </div>
        </div>
      </div>
    );
}

export default Card1