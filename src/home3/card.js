import './card.css'
import img from '../img/lab.png'
import img2 from '../img/lab2.png'
import img3 from '../img/lab3.png'
import img4 from '../img/lab4.jpg'
import img5 from '../img/lab5.png'
import img6 from '../img/lab6.png'






const Card = () => {
    return ( 
        <div className='card-container1'>
            <div className='judul-card'>
                <h1>Kami menyediakan berbagai macam layanan bisnis.</h1>
            </div>
            <div>
  <section className="articles">
    <article><a href="/program1">
      <div className="article-wrapper">
        <figure>
          <img src={img} />
        </figure>
        <div className="article-body">
          <h2>Program Inkubasi Startup</h2>
          <p>
          Satu tahun program Inkubator dengan kesempatan pendanaan sampai 350 juta rupiah / perusahaan.
            
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
      
          </div>
        </div>
      </div>
      </a>
    </article>
    <article><a href="/program2">
      <div className="article-wrapper">
        <figure>
          <img src={img2}/>
        </figure>
        <div className="article-body">
          <h2>Kegiatan Workshop</h2>
          <p>
          Perdalam ilmu melalui Binari Startup Class dan Binari Startup Talk.
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
         
          </div>
        </div>
      </div>
      </a>
    </article>
    <article><a href="/program3">
      <div className="article-wrapper">
        <figure>
          <img src={img3}/>
        </figure>
        <div className="article-body">
          <h2>Jaringan Investor</h2>
          <p>
          Berkesempatan Networking dan Business Matching bersama Investor.
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
         
          </div>
        </div>
      </div>
      </a>
    </article>
  </section>
</div>
<div>
  <section className="articles">
    <article><a href="/program4">
      <div className="article-wrapper">
        <figure>
          <img src={img4} />
        </figure>
        <div className="article-body">
          <h2>Workspace</h2>
          <p>
          Daptakan Ekosistem kerja nyaman di coworking space (Workspace 53).


            
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
         
          </div>
        </div>
      </div>
      </a>
    </article>
    <article><a href="/program5">
      <div className="article-wrapper">
        <figure>
          <img src={img5}/>
        </figure>
        <div className="article-body">
          <h2>Konsultasi Event</h2>
          <p>
          Rencanakan eventmu dengan Binari sebagai Event Organizernya.
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
         
          </div>
        </div>
      </div>
      </a>
    </article>
    <article><a href="/program6">
      <div className="article-wrapper">
        <figure>
          <img src={img6}/>
        </figure>
        <div className="article-body">
          <h2>Lab Penelitian</h2>
          <p>
          Binari Lab Penelitian fokus dalam penelitian pada UMKM dan Startup.
          </p>
          <div className="read-more">
             <span className="sr-only">about this is some title</span>
         
          </div>
        </div>
      </div>
      </a>
    </article>
  </section>
</div>



        
        
    </div>
    );
}
 
export default Card;