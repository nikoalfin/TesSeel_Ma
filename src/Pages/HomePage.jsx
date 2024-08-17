import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../Components/Home/HeroSection';
import PopularNews from '../Components/Home/PopularNews';
import RecomenNews from '../Components/Home/RecomenNews';
import BannerCarosel from '../Components/Home/BannerCarosel';



function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail`);
  };

  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <PopularNews onClick={handleClick} />
      <RecomenNews onClick={handleClick} />
      <BannerCarosel />
      <Footer />
    </div>
  );
}

export default HomePage;
