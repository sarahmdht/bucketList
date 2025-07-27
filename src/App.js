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
  // set pages
  const pages = [
    { element: <Home />, path: "" },
    { element: <Samples />, path: "samples" },
    { element: <Blog />, path: "blog" },
    { element: <About />, path: "about" },
    { element: <ContactUs />, path: "contact-us" },
    { element: <Register />, path: "register" },
    { element: <Signin />, path: "signin" }
  ]
  return (
    <div className="bg-primary-subtle min-vh-100 p-5">
      <Router>
        <Navbar />
        <Routes>
          {pages.map(({ element, path }) => (
            <Route path={`/${path}`} element={element} key={element} />

          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
