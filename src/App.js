import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Samples from './pages/Samples';
import Register from './pages/register';
import Signin from './pages/signin';


function App() {
  return (
    <div className="bg-primary-subtle min-vh-100 p-5">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/samples" element={<Samples />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
