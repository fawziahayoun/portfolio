import './App.css';
import Navbar from './components/Navbar'; 
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Educationpar from './components/Education';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Educationpar/>
      <Skills/>
      <Project/>
      <Contact/>
     
      <Footer/>
    </div>
  );
}

export default App;
