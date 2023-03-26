import logo from '../img/logo.png';
import './footer.css'
import {BsFacebook} from "react-icons/bs";

const Footer = () => {
    return ( 
        <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="haris">
              <h6>Tentang</h6>
              <p class="text-justify">Binari Inkubator<i> </i> Binari adalah Inkubator startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology</p>
            </div>
  
            <div class="haris2">
              <h6>Hubungi Kami</h6>
              <p>Jl. Pelajar Pejuang 45 No, 65 Bandung</p>
            </div>
  
            <div class="haris">
              <h6>Tautan berguna</h6>
              <ul class="footer-links">
                <li><a href="/">Beranda</a></li>
                <li><a href="/tentang">Tentang</a></li>
                <li><a href="/Layanan">Layanan</a></li>
                <li><a href="/Startup">Startup</a></li>
                <li><a href="/Acara">Acara</a></li>
                <li><a href="/Kontak">Kontak</a></li>
              </ul>
            </div>
            <div className='footer-img'>
                <img src={logo} />
            </div>
          </div>

          <hr/>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
           <a href="#"> BINARI INKUBATOR</a>.
              </p>
            </div>
  
            
          </div>
        </div>
  </footer>
    );
}
 
export default Footer;