import './css/App.css'
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/01-home/Home';

// ----------------------Education------------------------
import Education from './components/02-education/Education';
  import Juken from './components/02-education/02-components/Juken';
  import Shinro from './components/02-education/02-components/Shinro';
  

// ----------------------Health------------------------
import Health from './components/03-health/Health';

// ----------------------Lifeinfo------------------------
import Lifeinfo from './components/04-lifeinfo/Lifeinfo';

// ----------------------Education------------------------
import Consult from './components/05-consult/Consult';

// ----------------------Japanese------------------------
import Japanese from './components/06-japanese/Japanese';

// ----------------------Fondation------------------------
import Fondation from './components/07-fondation/Fondation';

// ----------------------Multilang_mail------------------------
import Multilang_mail from './components/08-multilang-mail/Multilang_mail';

// ----------------------Disaster------------------------
import Disaster from './components/09-disaster/Disaster';
import Sodan from './components/02-education/02-components/Sodan';




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>

            <Route path="/education" element={<Education />}/>
              <Route path="/education/Juken" element={<Juken />}/>
              <Route path="/education/Shinro" element={<Shinro />}/>
              <Route path="/education/Sodan" element={<Sodan/>} />
              
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
