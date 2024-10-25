import './App.css';
import './components/NavBar/NavBar';
import './components/CartWidget/CartWidget';
import './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import CheckOut from './components/CheckOut/CheckOut';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer />} />

            <Route exact path='/cart' element={<CartView />} />
            <Route exact path='/checkout' element={<CheckOut />} />
          </Routes>
        </CartProvider>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
