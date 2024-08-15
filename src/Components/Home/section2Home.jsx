import Card1 from "../Card/Card1";

function section2Home(){
  return (
    <section className="relative w-full">
      <div className="max-w-[1440px] mx-auto w-full h-screen px-14">
        <div className="flex items-center gap-2">
          <nav className="w-1 h-8 bg-[#0090FF]"></nav>
          <h3>Berita Populer</h3>
        </div>
        
        <div className="flex justify-center items-center gap-4">
            <Card1/>
        </div>
      </div>
    </section>
  );
}

export default section2Home