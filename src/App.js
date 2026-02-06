import './App.css';
import ClientReviews from './components/ClientReviews/ClientReviews';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import JoinCommunity from './components/JoinCommunity/JoinCommunity';
import PricingPlans from './components/PricingPlans/PricingPlans';
import FitnessPrograms from './components/FitnessPrograms/FitnessPrograms';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FitnessPrograms />
      <WhyChooseUs />
      <PricingPlans />
      <ClientReviews />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
