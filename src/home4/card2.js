import './card2.css'
import img from '../img/iwk.png'
import img2 from '../img/iwk2.png'
import img3 from '../img/iwk3.png'
import img4 from '../img/iwk4.png'
import img5 from '../img/iwk5.png'
import img6 from '../img/iwk6.png'




const Card2 = () => {
    return ( 
        <div className='card-container3' >
            <div className='judul-card3'>
                <h1>Kami menyediakan berbagai macam layanan bisnis.</h1>
                <h3>“Any time is a good time to start a company.” - Ron Conway</h3>
            </div>
            <div className='tim-container'>
            <div className='profile-card'>
                <img src={img} alt="" height="238px" />
                
            </div>
            <div className='profile-card'>
                <img src={img2} alt="" height="238px" />
                
            </div>
            <div className='profile-card'>
                <img src={img3} alt="" height="238px" />
              
            </div>
            <div className='profile-card'>
                <img src={img4} alt=""  height="238px" />
                
            </div>
            <div className='profile-card'>
                <img src={img5} alt=""  height="238px" />
               
            </div>
            <div className='profile-card'>
                <img src={img6} alt=""  height="238px" />
                
            </div>
        
            
        </div>
            </div>
  
    );
}
 
export default Card2;