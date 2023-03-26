import './tim.css';
import img2 from '../img/orang1.jpg'
import img3 from '../img/orang2.jpg'
import img4 from '../img/orang3.jpg'
import img5 from '../img/orang4.jpg'
import img6 from '../img/orang5.png'
import img7 from '../img/orang6.png'
import img8 from '../img/tim7.png'
import img9 from '../img/tim8.jpg'

function Tim(){
    return(
        <div className='judul-tim'>
            <h1>Tim Kami</h1>
            <div className='tim-container'>
            <div className='profile-card'>
                <img src={img2} alt="" height="238px" />
                <h3>Yoanes Bandung</h3>
                <h3>Incubator Manager</h3>
            </div>
            <div className='profile-card'>
                <img src={img3} alt="" height="238px" />
                <h3>Armein Z R Langi</h3>
                <h3>Chief Of Partnership</h3>
            </div>
            <div className='profile-card'>
                <img src={img4} alt="" height="238px" />
                <h3>Dwi Hendratmo Widyantoro</h3>
                <h3>General Manager Binari</h3>
            </div>
            <div className='profile-card'>
                <img src={img5} alt=""  height="238px" />
                <h3>Mervin T. Hutabarat</h3>
                <h3>Chief Of Marketing</h3>
            </div>
            <div className='profile-card'>
                <img src={img6} alt=""  height="238px" />
                <h3>M. Fahmi Nurfadillah</h3>
                <h3>IT STAFF</h3>
            </div>
            <div className='profile-card'>
                <img src={img7} alt=""  height="238px" />
                <h3>Mohammad Maulana</h3>
                <h3>Busdev. Manager Binari</h3>
            </div>
            <div className='profile-card'>
                <img src={img8} alt=""  height="238px" />
                <h3>Vitradisa</h3>
                <h3>Corporate Secretary</h3>
            </div>
            <div className='profile-card'>
                <img src={img9} alt=""  height="238px" />
                <h3>Asep Saepuloh</h3>
                <h3>Idventure Manager</h3>
            </div>
            
        </div>
        </div>



    );








}


export default Tim