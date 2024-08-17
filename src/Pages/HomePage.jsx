import Header from '../Components/Header';
import Section1Home from '../Components/Home/section1Home';
import Section2Home from '../Components/Home/section2Home';
import Section3Home from '../Components/Home/Section3Home';
import Section4Home from '../Components/Home/section4Home';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

function HomePage() {

 const navigate = useNavigate();

 const handleClick = () => {
   navigate(`/detail`);
 };

  return (
    <div className="relative">
      <Header />
      <Section1Home />
      <Section2Home onClick={handleClick} />
      <Section3Home onClick={handleClick} />
      <Section4Home />
      <Footer />
    </div>
  );
}

export default HomePage;
