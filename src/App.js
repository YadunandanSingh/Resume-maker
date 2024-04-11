
import './App.css';
import Header from './componets/Header';
import Slidemenu from './componets/slideMenu';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import About from './pages/about';
import MakeResume from './pages/MakeResume';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <header className="App-header">
       <Header />
      </header>
       < Slidemenu />
       <Routes>
       <Route path='/MakeResume' element={<MakeResume />} />
        <Route path='/about' element={<About />} />
       </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
