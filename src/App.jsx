import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhychooseUs';
import Offers from './components/Offers';
import ContactFormContainer from './components/ContactForm';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <About />
      <WhyChooseUs />
      <Offers />
      <ContactFormContainer />
      <Footer />
    </div>
  );
}

export default App;
