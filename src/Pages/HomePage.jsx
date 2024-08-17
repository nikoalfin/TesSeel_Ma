import Header from '../Components/Header';

import Section2Home from '../Components/Home/Section2Home';
import Section3Home from '../Components/Home/Section3Home';
import Section4Home from '../Components/Home/Section4Home';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../Components/Home/HeroSection';



function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail`);
  };

  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <Section2Home onClick={handleClick} />
      <Section3Home onClick={handleClick} />
      <Section4Home />
      <Footer />
    </div>
  );
}

export default HomePage;
