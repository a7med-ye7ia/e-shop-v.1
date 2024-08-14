import React,{useState} from 'react';
import NavBar from './components/Pages/NavBar/NavBar';
import CartPage from './components/Cart/CartPage';
import CartIcon from './components/Cart/CartIcon';
import Categories from './components/Pages/NavBar/Categories';
import ProductSection from './components/Pages/Home/ProductSection';
import './App.css';

function App() {
  return (
    <>
      <NavBar CartPage={CartPage} CartIcon={CartIcon} CategoryPage={Categories}/>
      <ProductSection/>
    </>
  );
}

export default App;
