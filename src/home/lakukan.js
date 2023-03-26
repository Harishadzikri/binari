import './lakukan.css'
import img from '../img/anjot.PNG'
import img2 from '../img/anjot2.jpg'
import img3 from '../img/anjot3.jpg'


function Lakukan(){
    return(
<div className='container-lakukan'>
    <div className='bisnis'>
     <h1>Binari Jalan Bisnis Anda</h1>
     <p><h4>"Menyediakan Jalan Yang luas Bagi Bisnis Anda"
Bergabunglah Bersama Kami Untuk Evolusi, Buat Perubahan untuk Indonesia, Kembangkan Generasi Pengusaha, dan Buat Dunia yang Lebih Baik.Program Inkubator Bisnis PRODUCT ACCELERATOR Program Edukasi Intensif FOUNDER BOOTCAMP
</h4></p>


<div>
  <section className="articles">
    <article>
      <div className="article-wrapper">
        <figure>
          <img src={img} />
        </figure>
        </div>
        <div className="article-body">
          <h2>Program Inkubator Bisnis</h2>
          <p>
          PRODUCT ACCELERATOR
            
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
            
         
        </div>
      </div>
    </article>
    <article>
      <div className="article-wrapper">
        <figure>
          <img src={img2}/>
        </figure>
        <div className="article-body">
          <h2>Program Edukasi Intensif</h2>
          <p>
          FOUNDER BOOTCAMP
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
            </div>
         
        </div>
      </div>
    </article>
    <article>
      <div className="article-wrapper">
        <figure>
          <img src={img3}/>
        </figure>
        </div>
        <div className="article-body">
          <h2>Jaringan Investor</h2>
          <p>
            DIGITAL MARKETING
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
            
         
        </div>
      </div>
    </article>
  </section>

</div>

    <div className='lanjut'>
        <h2>TUMBUH KEMBANG DENGAN BERKOLABORASI, BELAJAR, DAN MENDAPATKAN AKSES KE JARINGAN STRATEGIS BINARI!</h2>
        <p><h4>Jadilah bagian dari Binari dan skalakan bisnis Anda dengan sukses!</h4></p>
    </div>




</div>
</div>

    )
    
};

export default Lakukan