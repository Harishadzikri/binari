import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Home2 from './home2/home2';
import Home3 from './home3/home3';
import Home4 from './home4/home4';
import Home5 from './home5/home5';
import Home6 from './home6/home6';
import Kontakdata from './home6/crud'
import Program1 from './home3/program1';
import Program2 from './home3/program2';
import Program3 from './home3/program3';
import Program4 from './home3/program4';
import Program5 from './home3/program5';
import Program6 from './home3/program6';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tentang' element={<Home2/>}/>
        <Route path='/Layanan' element={<Home3/>}/>
        <Route path='/Startup' element={<Home4/>}/>
        <Route path='/Acara' element={<Home5/>}/>
        <Route path='/Kontak' element={<Home6/>}/>
        <Route path='/admin' element={<Kontakdata/>} />
        <Route path='/program1' element={<Program1/>} />
        <Route path='/program2' element={<Program2/>} />
        <Route path='/program3' element={<Program3/>} />
        <Route path='/program4' element={<Program4/>} />
        <Route path='/program5' element={<Program5/>} />
        <Route path='/program6' element={<Program6/>} />
      </Routes>
      
    </div>
  );
}

export default App;
