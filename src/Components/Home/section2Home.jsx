import Card1 from "../Card/Card1";

function section2Home(props){
  const {onClick}=props;
  return (
    <section className="relative w-full">
      <div className="max-w-[1440px] mx-auto w-full h-auto px-36 py-12">
        <div className="flex items-center gap-2">
          <nav className="w-1 h-8 bg-[#0090FF]"></nav>
          <h3 className="text-xl font-bold font-Nunito">Berita Terpopuler</h3>
        </div>

        <div className="flex items-center justify-center gap-10 mt-12">
          <Card1 onClick={onClick} />
          <Card1 onClick={onClick} />
          <Card1 onClick={onClick} />
        </div>
      </div>
    </section>
  );
}

export default section2Home