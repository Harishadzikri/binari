import './sosmed.css'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Sosmed = () => {
    return ( 
        <>
        <div className="sosmed-container">
            <h2>Contact Us</h2>
            <div className="sosmed-row">
                <div className="text-sosmed">
                    <p>Binari adalah Inkubator startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology" </p>
                </div>
                <div className="sosmed">
                    <ul>
                        <li><FaWhatsapp id='icon1'/> 089602809437</li>
                        <li><FaInstagram id='icon1'/> BINARI.OFFICIAL</li>
                    </ul>
                    <ul>
                        <li><FaWhatsapp id='icon1'/> 089602809437</li>
                        <li><FaInstagram id='icon1'/> Binari.Inkubator</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Sosmed;