import Navbars from '../nav/navbar';
import Footer from '../footer/footer'
import './program3.css'


const Program3 = () => {
    return ( 
    <>
    <Navbars/>
    <div className='atas-program3'>
        <div className='judul-program1'>
        
        </div>
        <div className='isi-program3'>
            <h1>Jaringan Investor</h1>
        </div>
        
        <div className='isi3-program3'>
            <h2>- Program PPBT</h2>
            <p>Setiap tahun Binari rutin mengikuti program PPTB yang diselenggarakan oleh Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesian. Pada program ini para startup berkesempatan mendapatkan pendanaan hingga 350 juta rupiah.</p>
        </div>
        <div className='isi3-program3'>
            <h2>- Business Matching</h2>
            <p>Selain itu Binari setiap tahun juga mengadakan Business Matching yang mempertemukan para startup dengan para investor. Pada acara Business Matching ini para startup berkesempatan langsung melakukan presentasi kepada investor tentang bisnis atau ide bisnis yang mereka punya.</p>
        </div>
        <Footer/>




    </div>

    </>
    );
}
 
export default Program3;