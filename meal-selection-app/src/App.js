import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meal/Meals';
import {useState } from 'react';
import Cart from './components/Cart/cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)


  const showCartHandler = () => {
      setCartIsShown(true)
  }

  const hideCartHandler = () => {
      setCartIsShown(false)
  }

  return (
    <CartProvider >
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider> 
  );
}

export default App;
