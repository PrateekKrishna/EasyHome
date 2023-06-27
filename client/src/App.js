import './App.css';
import Navbar from './components/navbar';
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import HouseDetails from './pages/HouseDetails';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Home';
import Profile from './pages/Profile'
import PopupForm from './components/PopupForm';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
            <Routes>
              <Route path='/' element = {<HomePage />} />
              <Route path='/dashboard' element = {<Dashboard />} />
              <Route path='/login' element = {<Login />} />
              <Route path='/register' element = {<Register />} />
              <Route path='/contact' element = {<Contact />} />
              <Route path='dashboard/house/:id' element = {<HouseDetails />} />
              <Route path='/profile' element = {<Profile />} />
              <Route path='/popup' element = {<PopupForm />} />
            </Routes>
        </div>
        <Footer />
      </Router>
    </>

  );
}

export default App;
