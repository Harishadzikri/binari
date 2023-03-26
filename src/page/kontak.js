import Footer from "../layout/footer";
import Navbar from "../layout/nav";

const Kontak = () => {
    return ( 
        <>
        <Navbar />
            <div className="bg-banner6 bg-center h-[500px] bg-fixed bg-cover flex flex-col justify-center items-center text-white">
                <h2 className="text-5xl">KONTAK</h2>
            </div>
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center py-20 gap-8">
                <h1 className="text-4xl text-center w-1/2 ">Jangan ragu untuk mengontak kami untuk mendapatkan informasi tentang Binari</h1>
                <h2 className="text-2xl text-center w-1/2 text-gray-700">Kontak kami untuk segera mendapat bantuan</h2>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                <div className="flex justify-between gap-4">
                    <div className="w-full flex flex-col">
                        <span>Nama Lengkap</span>
                        <input type="text" className="w-full border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                    </div>
                    <div className="w-full flex flex-col">
                        <span>Nama Belakang</span>
                        <input type="text" className="w-full border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                    </div>
                    
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
        <Footer />
        </>
     );
}
 
export default Kontak;