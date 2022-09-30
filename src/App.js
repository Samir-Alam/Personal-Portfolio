//import logo from './logo.svg';
import './App.css';
import './components/education.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import {Education} from "./components/education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  //document.addEventListener('contextmenu', event => event.preventDefault());   //prevent right click on the page
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;