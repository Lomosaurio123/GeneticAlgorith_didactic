import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

function BrandExample() {
  return (
    <>
      <Navbar className="bg_navbar">
          <div className="navbar-content">
            <img
              alt=""
              src="../../logo192.png"
              width="50"
              height="50"
            />
            <span className="navbar-text">Didactic genetic algorithm</span>
          </div>
      </Navbar>
    </>
  );
}

export default BrandExample;
