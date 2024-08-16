import Header from '../Components/Header';
import Section1Home from '../Components/Home/section1Home';
import Section2Home from '../Components/Home/section2Home';
import Section3Home from '../Components/Home/section3Home';
import Section4Home from '../Components/Home/section4Home';
import Footer from '../Components/Footer';

function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Section1Home />
      <Section2Home />
      <Section3Home />
      <Section4Home />
      <Footer />
    </div>
  );
}

export default HomePage;
