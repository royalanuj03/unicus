import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Consulting from './components/pages/Consulting';
import ContactUs from './components/pages/ContactUs';
import Designing from './components/pages/Designing';
import Development from './components/pages/Development';
import Marketing from './components/pages/Marketing';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
   <Router>
     <Navbar></Navbar>
     <Routes>
       <Route path = "/"                  element = {<Home></Home>}></Route>
       <Route path = "/about"            element = {<About></About>}></Route>
       <Route path = "/consulting"      element = {<Consulting></Consulting>}></Route>
       <Route path = "/contactus"      element = {<ContactUs></ContactUs>}></Route>
       <Route path = "/designing"     element = {<Designing></Designing>}></Route>
       <Route path = "/development"  element = {<Development></Development>}></Route>
       <Route path = "/marketing"  element = {<Marketing></Marketing>}></Route>
       <Route path = "/projects"  element = {<Projects></Projects>}></Route>
       <Route path = "/services" element = {<Services></Services>}></Route>
       <Route path = "/signup"  element = {<SignUp></SignUp>}></Route>
     </Routes>
   </Router>
   
  );
}

export default App;
