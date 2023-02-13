import './stayling/NavBar.css'
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBarP from './components/NavBarP';
import './stayling/Home.css'
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contactme from './components/Contactme';
function App() {
      return (
            <div className='main-Background-dark'>
                  <BrowserRouter>
                        <NavBarP />
                        <Routes>
                              <Route path={"/"} element={<Home />} />
                              <Route path={"/Skills"} element={<Work/>}/>
                              <Route path={"/Resume"} element={<Resume/>}/>
                        </Routes>
                        <Contactme/>
                  </BrowserRouter>

            </div>
      );
}

export default App;
