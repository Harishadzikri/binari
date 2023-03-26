import Navbars from '../nav/navbar';
import Carousel from './carousel';
import Lakukan from './lakukan';
import Footer from '../footer/footer';


const Home = () => {
    return(
        <div>
           <Navbars/>
           <Carousel/>
           <Lakukan/>
           <Footer/>
        </div>
    );
}

export default Home;