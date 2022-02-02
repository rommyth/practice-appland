import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/Presentation';
import aboutImage from './images/about.png'
import aboutImage1 from './images/download.png'
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutImage} title='Comes wit All You Need For Daily Life' button='Fet the App' />
      <Presentation />
      <About image={aboutImage1} title='Download And Get The APP Now' button='Download' />
      <Contact />
    </div>
  );
}

export default App;
