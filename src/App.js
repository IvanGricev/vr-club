import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import HowToPage from './pages/HowToPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg p-4 container">
            <div className="container-fluid">
              <button className="navbar-toggler" style={{backgroundColor: 'rgba(129, 118, 175, 1)'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-lg-flex fw-bold" id="navbarsExample11">
                <a className="navbar-brand col-lg-3 me-0 fs-4" href="#"><img className="logo" src="./img/logo.svg" alt="Logo" style={{width: '50px', height: '50px'}}/>HYDRA</a>
                <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                  <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/">HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/about">ABOUT</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/services">SERVICES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/technologies">TECHNOLOGIES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/how-to">HOW TO</Link>
                  </li>
                </ul>
                <div className="d-lg-flex col-lg-3 justify-content-lg-end nav-buttons">
                  <Link className="text-light text-decoration-none outlined-button" aria-current="page" to="/how-to">CONTACT US</Link>
                  <Link className="text-dark text-decoration-none filled-button" aria-current="page" to="/how-to">JOIN HYDRA</Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Используйте element вместо component для React Router v6 */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/how-to" element={<HowToPage />} />
          </Routes>
        </main>

        <footer className="pt-4 pb-3">
          <hr />
          <div className="container fw-bold">
            <div className="row">
              <div className="col">
                <img className="logo" src="./img/logo.svg" alt="Logo" style={{width: '100px', height: '100px'}}/>
              </div>
              <div className="col">
                <a href="#" className="row text-decoration-none text-light mt-2">
                  HOME
                </a>
                <a href="#" className="row text-decoration-none text-light mt-2">
                  ABOUT
                </a>
                <a href="#" className="row text-decoration-none text-light mt-2">
                  SERVICES
                </a>
              </div>
              <div className="col">
                <a href="#" className="row text-decoration-none text-light mt-2">
                  TECHNOLOGIES
                </a>
                <a href="#" className="row text-decoration-none text-light mt-2">
                  HOW TO
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
