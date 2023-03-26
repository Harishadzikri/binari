import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import lay1 from '../../assets/layanan1.png'
import lay2 from '../../assets/layanan2.png'
import lay3 from '../../assets/layanan3.png'
import lay4 from '../../assets/layanan4.jpg'
import lay5 from '../../assets/layanan5.png'
import lay6 from '../../assets/layanan6.png'

const Startup = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Program Inkubasi Startup</h2>
            <div className="flex w-full gap-16">
                <img src={lay1} alt="" />
                <div className="flex flex-col">
                    <p>Binari berpengalaman lebih dari 5 tahun dalam menjalankan Inkubator dan sudah menjadi anggota AIBI (Asosiasi Inkubator Bisnis Indonesia) serta calon anggota ABI-Net (ASEAN Business Incubator Network). Program yang kami tawarkan adalah :</p>
                    <p className="font-bold mt-10">- Incubator Consultation</p>
                    <p>Binari menawarkan kepada anda kerjasama untuk pembuatan inkubator di perusahaan anda, peran Inkubator penting bagi anda yang sedang melakukan pengembangan produk digital (R&D).</p>
                    <p className="font-bold mt-10">- Incubation Program Consulting and Organizer</p>
                    <p>Binari menawarkan kepada anda kerjasama dalam menjalankan program pembinaan baik pada Startup dan UMKM. Kami berpengalaman bekerjasama dengna Pemkot Cimahi serta Inkubator Enhaiipreneur dalam program pembinaan Startup.</p>
                    <a href="/form-startup" className="w-1/3 bg-pink-700 text-white text-center mt-10 h-9 flex flex-col justify-center items-center rounded-sm">Daftar Sekarang</a>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Startup;