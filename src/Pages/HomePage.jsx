import Header from '../Components/Header';
import Section1Home from '../Components/Home/section1Home';
import Section2Home from '../Components/Home/section2Home';
function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Section1Home />
      <Section2Home />
    </div>
  );
}

export default HomePage;
