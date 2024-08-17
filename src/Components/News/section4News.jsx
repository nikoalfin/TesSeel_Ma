import Card4 from "../Card/Card4";

function Section4News(){
    return (
      <div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-2">
            <nav className="w-1 h-8 bg-[#0090ff]"></nav>
            <h3 className="text-xl font-bold font-Nunito">Berita Terpopuler</h3>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <Card4 />
          <hr />
          <Card4 />
          <hr />
          <Card4 />
        </div>
      </div>
    );
}

export default Section4News;