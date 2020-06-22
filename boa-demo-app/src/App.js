import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header company="Bank of America" city="chennai" />
      <h1>THIS IS BODY</h1>
      <Footer email="suyash@gmail.com"/>
    </div>
  );
}

export default App;
