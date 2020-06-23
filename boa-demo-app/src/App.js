import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import TextInput from './TextInput';

function App() {
  return (
    <div className="App">
      <Header company="Bank of America" city="chennai" />
      <Dashboard />
      <TextInput />
      <Footer email="suyash@gmail.com"/>
    </div>
  );
}

export default App;
