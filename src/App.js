
import './App.css';
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Shop,About,Home,Contact,Cart} from './pages';
import ProductDetail from './components/ProductDetail';

import Checkout from './pages/Checkout';


function App() {
  return (
  <div className='App'>
  <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/ProductDetail/:id' element={<ProductDetail />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Cart" element={<Cart />} />

          </Routes>
    </Router>
   <Footer/>
    </div>
  );
}

export default App;
