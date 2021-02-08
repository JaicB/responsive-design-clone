import { useState } from 'react' 
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Start Bootstrap</h2>
        <nav className="nav-bar">
          <p className="nav-item">About</p>
          <p className="nav-item">Projects</p>
          <p className="nav-item">Contact</p>
        </nav>
        <div className="hamburger-menu">
          <p className="menu">Menu</p>
          <img
            onClick={toggleMenu}
            src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/hamburger-menu.png"
            className="hamburger"
            alt="hamburger" />
          <nav className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
            <p className="mobile-nav-item">About</p>
            <p className="mobile-nav-item">Projects</p>
            <p className="mobile-nav-item">Contact</p>
          </nav>
        </div>
      </header>
      <div className="App-body">
        <h1>Grayscale</h1>
        <h2 className="tagline">A free, responsive, one-page Bootstrap theme created by Start Bootstrap.</h2>
        <button className="started-btn">Get started</button>
      </div>
    </div>
  );
}

export default App;
