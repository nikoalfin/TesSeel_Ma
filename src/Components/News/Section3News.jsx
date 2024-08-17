import Card3 from "../Card/Card3";

function Section3News(){
    return (
      <div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-2">
            <nav className="w-1 h-8 bg-[#0090ff]"></nav>
            <h3 className="text-xl font-bold font-Nunito">Berita terkait</h3>
          </div>
          <button className="w-32 h-12 bg-cyan-200 border-[#0090ff] border-2 rounded-lg text-[#0090ff]">Lihat Semua</button>
        </div>
        <div className="flex items-center justify-center flex-wrap mt-12 gap-4">
          <Card3 />
          <Card3 />
          <Card3 />
        </div>
      </div>
    );
}


export default Section3News;