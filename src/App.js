
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">

      <Header>

        
      </Header>


      <Routes>

 <Route path='/home'  element={<Home></Home>}></Route>
 <Route path='/service'  element={<Service></Service>}></Route>
 <Route path='/about'  element={<About></About>}></Route>
 <Route path='/contact'  element={<Contact></Contact>}></Route>
 <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>



    </div>
  );
}

export default App;
