import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
            <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/login' element = {<Login />} />
              <Route path='/register' element = {<Register />} />
              <Route path='/contact' element = {<Contact />} />
            </Routes>
        </div>
        <Footer />
      </Router>
    </>

  );
}

export default App;
