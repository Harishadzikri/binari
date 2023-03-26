
import {Link} from 'react-router-dom'
import './navbar.css'
import img from './../img/logo.png'



function Navbars(){
    return(
    
        <div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet" />
        <nav>
          <div id="nav-logo-section" className="nav-section">
            <a href="#">
              <img src={img} />
            </a>
          </div>
          <div id="nav-link-section" className="nav-section">
            <a href="/">Beranda</a>
            <a href="/tentang">Tentang</a>
            <a href="/Layanan">Layanan</a>
            <a href="/Startup">Startup</a>
            <a href="/Acara">Acara</a>
            <a href="/Kontak">Kontak</a>
          </div>
          <div id="nav-social-section" className="nav-section">
           
          </div>
        </nav>
      </div>
          
    );


}
export default Navbars;