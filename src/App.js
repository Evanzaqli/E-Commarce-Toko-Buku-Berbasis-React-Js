
import './App.css';
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Shop,About,Home,Contact,Cart,Detail} from './pages';



function App() {
  return (
  <div className='App'>
  <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Detail' element={<Detail />} />

          </Routes>
      </div>
    </Router>
   <Footer/>
    </div>
  );
}

export default App;
