import React from 'react';
import './App.css';
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MainContent from "../MainContent/MainContent"

function App() {
  return (
    <div id="main-div">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;