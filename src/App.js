import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Productview from './components/Productview';






function App() {
  return (
    <>
    <header><Header/></header>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/view-product/:id' element={<Productview/>}/>
    </Routes>
    <footer><Footer/></footer>
    </>
  );
}

export default App;
