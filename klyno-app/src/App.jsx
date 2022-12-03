import './css/App.css'
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/01-home/Home';
import Education from './components/02-education/Education';
import Health from './components/03-health/Health';
import Lifeinfo from './components/04-lifeinfo/Lifeinfo';
import Consult from './components/05-consult/Consult';
import Japanese from './components/06-japanese/Japanese';
import Fondation from './components/07-fondation/Fondation';
import Multilang_mail from './components/08-multilang-mail/Multilang_mail';
import Disaster from './components/09-disaster/Disaster';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/health" element={<Health />}/>
            <Route path="/lifeinfo" element={<Lifeinfo />}/>
            <Route path="/consult" element={<Consult />}/>
            <Route path="/japanese" element={<Japanese />}/>
            <Route path="/foundation" element={<Fondation />}/>
            <Route path="/maltilang.mail" element={<Multilang_mail />}/>
            <Route path="/disaster" element={<Disaster />}/>            
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
