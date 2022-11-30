import './App.css'
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/01-home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
