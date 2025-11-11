import React from 'react'
import './App.css'
import Greet from './components/Greet'
import Add from './components/Add'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ProductInfo from './components/ProductInfo'
import Math from './components/Math'
import ProductList from './components/ProductList'
import Person from './components/Person'
import Product from './components/Product'
import Password from './components/Password'
import Cart from './components/Cart'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'
import { FaShoppingCart } from 'react-icons/fa';


const App = () => {
  return (
    <>
    <Greeting />
    <FaShoppingCart />
    </>
  )
}


export default App

