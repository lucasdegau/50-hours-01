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


const App = () => {
  return (
    <>
    <ProductList />
    <Math />
    <ProductInfo />
    <Greet />
    <Header />
    <MainContent />
    <Footer />
    </>
  )
}

export default App

