import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import lay1 from '../../assets/layanan1.png'
import lay2 from '../../assets/layanan2.png'
import lay3 from '../../assets/layanan3.png'
import lay4 from '../../assets/layanan4.jpg'
import lay5 from '../../assets/layanan5.png'
import lay6 from '../../assets/layanan6.png'

const Formstartup = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center py-20 gap-8">
                <h1 className="text-4xl text-center w-1/2 ">Jangan ragu untuk mengontak kami untuk mendapatkan informasi tentang Binari</h1>
                <h2 className="text-2xl text-center w-1/2 text-gray-700">Kontak kami untuk segera mendapat bantuan</h2>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                <div className="w-full flex flex-col">
                    <span>Nama Depan</span>
                    <input type="text" className="w-full border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Nomor Handphone</span>
                        <input type="text" className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Alamat Email*</span>
                        <input type="email" className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Pesan Anda*</span>
                        <textarea name="" id="" cols="30" rows="10" className=" border border-black outline-none focus:border-pink-600 transition p-3"></textarea>
                        <a href="#" className="w-1/3 bg-pink-600 text-white text-center mt-4 h-10 flex flex-col justify-center items-center">KIRIM PESAN</a>
                </div>
                
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Formstartup;