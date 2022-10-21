import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meal/Meals';
import { Fragment } from 'react';
import Cart from './components/Cart/cart';

function App() {
  return (
    <Fragment >
      <Cart/>
      <Header/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
