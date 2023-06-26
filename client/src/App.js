import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import HouseDetails from './pages/HouseDetails';
import Profile from './pages/Profile';


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
              <Route path='house/:id' element = {<HouseDetails />} />
              <Route path='user/:id' element = {<Profile />} />
            </Routes>
        </div>
        <Footer />
      </Router>
    </>

  );
}

export default App;
