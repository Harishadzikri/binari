import Navbars from '../nav/navbar';
import Footer from '../footer/footer'
import './program1.css'


const Program1 = () => {
    return ( 
    <>
    <Navbars/>
    <div className='atas-program1'>
        <div className='judul-program1'>
        
        </div>
        <div className='isi-program1'>
            <h1>Program Inkubasi Startup</h1>
        </div>
        <div className='isi2-program1'>
            <h2>Binari berpengalaman lebih dari 5 tahun dalam menjalankan Inkubator dan sudah menjadi anggota AIBI (Asosiasi Inkubator Bisnis Indonesia) serta calon anggota ABI-Net (ASEAN Business Incubator Network). Program yang kami tawarkan adalah </h2>
        </div>
        <div className='isi3-program1'>
            <h3>- Incubator Consultation</h3>
            <p>Binari menawarkan kepada anda kerjasama untuk pembuatan inkubator di perusahaan anda, peran Inkubator penting bagi anda yang sedang melakukan pengembangan produk digital (R&D).</p>
        </div>
        <div className='isi3-program1'>
            <h3>- Incubation Program Consulting and Organizer</h3>
            <p>Binari menawarkan kepada anda kerjasama dalam menjalankan program pembinaan baik pada Startup dan UMKM. Kami berpengalaman bekerjasama dengna Pemkot Cimahi serta Inkubator Enhaiipreneur dalam program pembinaan Startup.</p>
        </div>
        <Footer/>




    </div>

    </>
    );
}
 
export default Program1;